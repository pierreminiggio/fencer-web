import React from 'react'
import { Box, Breadcrumbs, Button, Link, Typography } from '@material-ui/core'
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

    /**
     * @returns {JSX.Element|string}
     */
    const renderCurrentBreadcrumb = () => {
        let libel = null
        switch (state) {
            case 'loginForm':
                libel = 'Login'
                break
            case 'registerForm':
                libel = 'Register'
                break
            default:
        }

        return libel ? <Typography color="textPrimary">{libel}</Typography> : ''
    }

    return <Box p={2}>
        <h1>Fencer Game</h1>

        {state !== 'game' ? <Breadcrumbs aria-label="breadcrumb">
            {can('home') ? <Link color="inherit" href="javascript;" onClick={e => {
                    e.preventDefault()
                    send('home')
                }}>
                    Home
                </Link> : <Typography color="textPrimary">Home</Typography>
            }
            {renderCurrentBreadcrumb()}
        </Breadcrumbs> : ''}

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
