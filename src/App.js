import {createMachine, state} from 'robot3'

const machine = createMachine({
  register: state(),
  login: state(),
  findGame: state(),
  game: state()
})