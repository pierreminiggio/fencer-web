import { Button, Box } from '@material-ui/core'
import FormEmailField from '../Form/FormEmailField'
import FormPasswordField from '../Form/FormPasswordField'
import { useMachine } from '../Struct/StateMachine/useMachine'
import machine from './machine'

/**
 * @param {Object} props
 * 
 * @returns {JSX.Element}
 */
export default function RegisterForm(props) {

    const navigationMachine = props.navigationMachine
    const navigationCan = navigationMachine.can
    const navigationSend = navigationMachine.send

    const registerMachine = useMachine(machine)
    const {state, context, can, send} = registerMachine
    console.log(can)
    console.log(send)
    return (
        <>
            <form noValidate autoComplete="on">
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
            <Button
                variant="contained"
                color="primary"
                disabled={! can('submit')}
                onClick={() => send('submit')}
            >
                Register
            </Button>
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
