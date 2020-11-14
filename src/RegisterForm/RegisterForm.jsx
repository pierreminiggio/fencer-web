import { Button, Box, TextField } from '@material-ui/core'
import FormInputField from '../Form/FormInputField'
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
                    <FormInputField
                        type={'email'}
                        field={'login'}
                        label={'Login'}
                        can={can}
                        send={send}
                        transition={'input'}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        disabled={! can('input')}
                        onChange={(e) => can('input') && send('input', {
                            field: 'password',
                            value: e.target.value
                        })}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        disabled={! can('input')}
                        onChange={(e) => can('input') && send('input', {
                            field: 'confirm',
                            value: e.target.value
                        })}
                    />
                </Box>
            </form>
            {true && <Button
                variant="contained"
                color="primary"
                onClick={() => send('submit')}
            >
                Register
            </Button>}
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
