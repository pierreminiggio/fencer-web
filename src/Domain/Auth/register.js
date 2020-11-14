import {createMachine, guard, invoke, reduce, state, transition} from 'robot3'

function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

export default createMachine(
    'form',
    {
        form: state(
            transition('input', 'form', reduce((ctx, ev) => {
                const newCtx = {...ctx}
                newCtx[ev.field] = ev.value

                return newCtx
            })),
            transition(
                'submit',
                'loading',
                guard(ctx =>
                    ctx.login !== null &&
                    ctx.login !== '' &&
                    ctx.password !== null &&
                    ctx.password !== '' &&
                    ctx.confirm !== null &&
                    ctx.confirm !== ''
                )
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
      () => ({login: null, password: null, confirm: null, token: null})
)
