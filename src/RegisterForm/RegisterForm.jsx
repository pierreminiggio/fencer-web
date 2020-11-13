import React from 'react'
import { Button, Box, TextField } from '@material-ui/core'
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

    return (
        <>
            <form noValidate autoComplete="on">
                <Box display="flex" flexDirection="column">
                    <TextField
                        label="Login"
                        type="email"
                        disabled={! can('input')}
                        onChange={(e) => can('input') && send('input', {
                            field: 'login',
                            value: e.target.value
                        })}
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
