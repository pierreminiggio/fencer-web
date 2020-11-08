import React from 'react'
import { Box, Button } from '@material-ui/core'
import { useMachine } from './Navigation/useMachine'
import machine from './Navigation/machine'

export default function App() {
  const [state, send] = useMachine(machine)

  return <Box p={2}>
    <h1>Fencer Game</h1>
    <Button
      variant="contained"
      color="primary"
      onClick={() => send('login')}
    >
      Login
    </Button>
    {state}
  </Box>
}