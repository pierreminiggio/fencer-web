import {createMachine, guard, invoke, reduce, state, transition} from 'robot3'

function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

export default createMachine(
    'form',
    {
      form: state(
        transition('input', 'form', reduce((ctx, ev) => {
            ctx[ev.field] = ev.value

            return ctx
        })),
        transition(
            'submit',
            'loading'
        )
      ),
      loading: invoke(
        () => wait(2000),
        transition(
            'done',
            'success',
            reduce((ctx, ev) => ({...ctx, token: ev.data.token}))
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