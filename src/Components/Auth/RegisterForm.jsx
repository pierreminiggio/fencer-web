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

    let tooltip = ! can('submit') ? 'Please fill the form' : undefined

    let alert = undefined
    const formStyle = {}
    if (can('submit') && context.password !== context.confirm) {
        alert = new AlertData('warning', 'The 2 passwords don\'t match !')
    }

    if (! alert) {
        formStyle.paddingTop = '48px'
    }

    return (
        <>
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
                </Box>
            </form>

            <TooltipedButton
                variant="contained"
                color="primary"
                onClick={() => send('submit')}
                disabled={! can('submit')}
                text='Register'
                tooltip={tooltip}
            />
            
            
            {navigationCan('addToken') && <Button
                variant="contained"
                color="primary"
                onClick={() => navigationSend('addToken', {value: 'blabla'})}
            >
                Add Token
            </Button>}

            {navigationCan('loggedIn') && <Button
                variant="contained"
                color="primary"
                onClick={() => navigationSend('loggedIn')}
                >
                Login !
            </Button>}

            {navigationCan('home') && <Button
                variant="contained"
                color="primary"
                onClick={() => navigationSend('home')}
                >
                Home
            </Button>}

            <Box mt={2}>
                State : {state}<br/>
                Context : {JSON.stringify(context)}
            </Box>
        </>
    )
}
