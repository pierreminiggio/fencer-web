import {createMachine, interpret, state, transition} from 'robot3'

const machine = createMachine({
  home: state(transition('register', 'register')),
  register: state(),
  login: state(),
  findGame: state(),
  game: state()
})

const service = interpret(machine, () => {

})
console.log(service.machine.current)
service.send('register')
console.log(service.machine.current)