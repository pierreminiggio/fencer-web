import {createMachine, interpret, state, transition} from 'robot3'

const machine = createMachine({
  loggedOut: state(
    transition('register', 'register'),
    transition('login', 'login')
  ),
  loggedIn: state(
    transition('loggedOut', 'loggedOut'),
    transition('findGame', 'findGame')
  ),
  register: state(
    transition('loggedOut', 'loggedOut'),
    transition('loggedIn', 'loggedIn')
  ),
  login: state(
    transition('loggedOut', 'loggedOut'),
    transition('loggedIn', 'loggedIn')
  ),
  findGame: state(
    transition('loggedIn', 'loggedIn'),
    transition('loggedOut', 'loggedOut'),
    transition('game', 'game')
  ),
  game: state(
    transition('findGame', 'findGame'),
    transition('loggedOut', 'loggedOut')
  )
})

const service = interpret(machine, () => {

})
console.log(service.machine.current)
service.send('register')
console.log(service.machine.current)