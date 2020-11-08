import React from 'react'
import { Box, Button } from '@material-ui/core'
import { useMachine } from './Navigation/useMachine'
import machine from './Navigation/machine'

export default function App() {
  const [state, send] = useMachine(machine)

  return <Box p={2}>
    <h1>Fencer Game</h1>
    {state === 'loginForm' && <p>Login form</p>}
    {state === 'registerForm' && <p>Register form</p>}
    <Button
      variant="contained"
      color="primary"
      onClick={() => send('login')}
    >
      Login
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={() => send('register')}
    >
      Register
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={() => send('home')}
    >
      Home
    </Button>
    {state}
  </Box>
}