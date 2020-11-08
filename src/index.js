import {createMachine, interpret, reduce, state, transition} from 'robot3'

const machine = createMachine(
  'loggedOut',
  {
    loggedOut: state(
      transition('register', 'registerForm'),
      transition('login', 'loginForm')
    ),
    loggedIn: state(
      transition('addToken', 'loggedIn', reduce((ctx, ev) => ({...ctx, token: ev.value}))),
      transition('logout', 'loggedOut'),
      transition('findGame', 'findGame')
    ),
    registerForm: state(
      transition('logout', 'loggedOut'),
      transition('loggedIn', 'loggedIn')
    ),
    loginForm: state(
      transition('logout', 'loggedOut'),
      transition('loggedIn', 'loggedIn')
    ),
    findGame: state(
      transition('loggedIn', 'loggedIn'),
      transition('logout', 'loggedOut'),
      transition('game', 'game')
    ),
    game: state(
      transition('findGame', 'findGame'),
      transition('logout', 'loggedOut')
    )
  },
  () => ({token: null})
)

const service = interpret(machine, () => {
  //console.log('Etat : ' + service.machine.current)
  console.log('Contexte : ' + JSON.stringify(service.context))
})
console.log(service.machine.current)
service.send('login')
console.log(service.machine.current)
service.send('loggedIn')
console.log(service.machine.current)
service.send({type: 'addToken', value: 'blablabla'})
console.log(service.machine.current)