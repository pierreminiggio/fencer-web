import {createMachine, guard, reduce, state, transition} from 'robot3'

export default createMachine(
    'loggedOut',
    {
      loggedOut: state(
        transition('register', 'registerForm'),
        transition('login', 'loginForm')
      ),
      loggedIn: state(
        transition('logout', 'loggedOut'),
        transition('findGame', 'findGame')
      ),
      registerForm: state(
        transition('logout', 'loggedOut'),
        transition('loggedIn', 'loggedIn', guard(ctx => ctx.token !== null)),
        transition('addToken', 'registerForm', reduce((ctx, ev) => ({...ctx, token: ev.value})))
      ),
      loginForm: state(
        transition('logout', 'loggedOut'),
        transition('loggedIn', 'loggedIn', guard(ctx => ctx.token !== null)),
        transition('addToken', 'loginForm', reduce((ctx, ev) => ({...ctx, token: ev.value})))
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