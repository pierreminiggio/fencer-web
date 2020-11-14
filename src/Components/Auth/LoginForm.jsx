import React from 'react'
import { Button } from '@material-ui/core'

/**
 * @param {Object} props
 * 
 * @returns {JSX.Element}
 */
export default function LoginForm(props) {

    const navigationMachine = props.navigationMachine
    const can = navigationMachine.can
    const send = navigationMachine.send

    return (<>
        <p>login form</p>
        {can('addToken') && <Button
            variant="contained"
            color="primary"
            onClick={() => send('addToken', {value: 'blabla'})}
        >
        Add Token
        </Button>}

        {can('loggedIn') && <Button
        variant="contained"
        color="primary"
        onClick={() => send('loggedIn')}
        >
        Login !
        </Button>}

        {can('home') && <Button
        variant="contained"
        color="primary"
        onClick={() => send('home')}
        >
        Home
        </Button>}
    </>)
}
