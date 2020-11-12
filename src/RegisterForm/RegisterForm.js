import React from 'react'
import { Button, Box } from '@material-ui/core'

export default class RegisterForm extends React.Component {

    /**
     * @returns {JSX.Element}
     */
    render() {

        const navigationMachine = this.props.navigationMachine
        const can = navigationMachine.can
        const send = navigationMachine.send

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
}
