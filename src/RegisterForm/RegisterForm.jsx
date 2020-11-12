import React from 'react'
import { Button, Box } from '@material-ui/core'
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
    console.log(state)

    return (<>
        <p>register form</p>
        <Box>
            <div>
                <label htmlFor="login">Login :</label>
                <input type="email" placeholder="Login" id="login"/>
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input type="password" placeholder="Password" id="password"/>
            </div>
            <div>
                <label htmlFor="confirm">Confirm Password :</label>
                <input type="password" placeholder="Confirm Password" id="confirm"/>
            </div>
            {true && <Button
                variant="contained"
                color="primary"
                onClick={() => {}}
            >
                Register
            </Button>}
        </Box>
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
    </>)
}
