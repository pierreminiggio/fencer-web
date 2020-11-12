import {createMachine, guard, invoke, reduce, state, transition} from 'robot3'

function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

export default createMachine(
    'form',
    {
      form: state(
        transition('submit', 'loading')
      ),
      loading: invoke(
        () => wait(2000),
        transition(
            'done',
            'success',
            reduce((ctx, ev) => ({...ctx, login: ev.data.login, password: ev.data.password, token: ev.data.token}))
        ),
        transition(
            'error',
            'edit',
            reduce((ctx, ev) => ({...ctx, error: ev.error.message}))
        )
      ),
      success: state(),
      error: state()
    },
    () => ({token: null})
)