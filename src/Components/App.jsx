import React from 'react'
import { Box, Button } from '@material-ui/core'
import machine from '../Domain/navigation'
import { useMachine } from '../Struct/StateMachine/useMachine'
import LoginForm from './Auth/LoginForm'
import RegisterForm from './Auth/RegisterForm'

/**
 * @returns {JSX.Element}
 */
export default function App() {
    const navigationMachine = useMachine(machine)
    const {state, context, can, send} = navigationMachine

    return <Box p={2}>
        <h1>Fencer Game</h1>
        {state === 'loginForm' && <LoginForm navigationMachine={navigationMachine} />}
        {state === 'registerForm' && <RegisterForm navigationMachine={navigationMachine} />}

        {can('login') && <Button
            variant="contained"
            color="primary"
            onClick={() => send('login')}
        >
           Login
        </Button>}

        {can('register') && <Button
            variant="contained"
            color="primary"
            onClick={() => send('register')}
        >
            Register
        </Button>}

        <Box mt={2}>
            State : {state}<br/>
            Context : {JSON.stringify(context)}
        </Box>
    </Box>
}
