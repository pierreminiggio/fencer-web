import React from 'react'
import { Button } from '@material-ui/core'

export default class LoginForm extends React.Component {

    /**
     * @returns {JSX.Element}
     */
    render() {

        const navigationMachine = this.props.navigationMachine
        const can = navigationMachine.can
        const send = navigationMachine.send

        return (<>
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
