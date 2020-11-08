import React from 'react'
import { Box, Button } from '@material-ui/core'
import { useMachine } from './Navigation/useMachine'
import machine from './Navigation/machine'

export default function App() {
  const [state, context, send, can] = useMachine(machine)

  return <Box p={2}>
    <h1>Fencer Game</h1>
    {state === 'loginForm' && <p>Login form</p>}
    {state === 'registerForm' && <p>Register form</p>}

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
    <Box mt={2}>
      State : {state}<br/>
      Context : {JSON.stringify(context)}
    </Box>
  </Box>
}