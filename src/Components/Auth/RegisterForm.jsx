import { Button, Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import FormEmailField from '../Helpers/Form/Input/FormEmailField'
import FormPasswordField from '../Helpers/Form/Input/FormPasswordField'
import { useMachine } from '../../Struct/StateMachine/useMachine'
import machine from '../../Domain/Auth/register'
import StateMachine from '../../Struct/StateMachine/StateMachine'
import TooltipedButton from '../Helpers/Form/Button/TooltipedButton'
import AlertData from '../../Struct/MaterialUI/AlertData'

/**
 * @typedef {Object} RegisterFormProps
 * 
 * @property {StateMachine} navigationMachine
 */

/**
 * @param {RegisterFormProps} props
 * 
 * @returns {JSX.Element}
 */
export default function RegisterForm(props) {

    const navigationMachine = props.navigationMachine
    const navigationCan = navigationMachine.can
    const navigationSend = navigationMachine.send

    const registerMachine = useMachine(machine)
    const {state, context, can, send} = registerMachine

    const tooltip = ! can('submit') && state === 'edit' ? 'Please fill the form' : undefined

    let alert = undefined
    const formStyle = {}
    if (can('submit') && context.password !== context.confirm) {
        alert = new AlertData('warning', 'The 2 passwords don\'t match !')
    }
    
    if (state === 'success') {
        alert = new AlertData('success', 'Successfully Registered !')
        setTimeout(() => {
            navigationCan('addToken') && navigationSend('addToken', {value: context.token})
            navigationCan('loggedIn') && navigationSend('loggedIn')
        }, 2000)
    }

    if (! alert) {
        formStyle.paddingTop = '48px'
    }

    const loading = state === 'loading'

    return (
        <>
            {navigationCan('home') && <Button
                variant="outlined"
                onClick={() => navigationSend('home')}
                >
                Home
            </Button>}

            <form autoComplete="on" style={formStyle}>
                {alert ? <Alert severity={alert.severity}>{alert.message}</Alert> : ''}
                <Box display="flex" flexDirection="column">
                    <FormEmailField
                        field='login'
                        label='Login'
                        can={can}
                        send={send}
                        transition='input'
                    />
                    <FormPasswordField
                        field='password'
                        label='Password'
                        can={can}
                        send={send}
                        transition='input'
                    />
                    <FormPasswordField
                        field='confirm'
                        label='Confirm Password'
                        can={can}
                        send={send}
                        transition={'input'}
                    />

                    <Box display="flex" flexDirection="row" mt={2}>
                        <TooltipedButton
                            variant="contained"
                            color="primary"
                            onClick={() => send('submit')}
                            disabled={! can('submit')}
                            text='Register'
                            loading={loading}
                            tooltip={tooltip}
                            style={{flexGrow: 1}}
                        />
                    </Box>
                </Box>
            </form>
            <Box mt={2}>
                State : {state}<br/>
                Context : {JSON.stringify(context)}
            </Box>
        </>
    )
}
