import { Button, Box, Tooltip } from '@material-ui/core'
import FormEmailField from '../Helpers/Form/Input/FormEmailField'
import FormPasswordField from '../Helpers/Form/Input/FormPasswordField'
import { useMachine } from '../../Struct/StateMachine/useMachine'
import machine from '../../Domain/Auth/register'
import StateMachine from '../../Struct/StateMachine/StateMachine'
import DisabledButton from '../Helpers/Form/Button/DisabledButton'

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

    return (
        <>
            <form autoComplete="on">
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
            {
                can('submit')
                    ? <Button
                        variant="contained"
                        color="primary"
                        onClick={() => send('submit')}
                    >
                        Register
                    </Button>
                    : <Tooltip title="Veuillez remplir le formulaire">
                        <DisabledButton text='Register'/>
                    </Tooltip>
            }
            
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
