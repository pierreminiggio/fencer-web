import {createMachine, guard, invoke, reduce, state, transition} from 'robot3'
import addStringValueOrNull from '../../Struct/Object/addStringValueOrNull'

function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

export default createMachine(
    'form',
    {
        form: state(
            transition('input', 'form', reduce((ctx, ev) => {
                return addStringValueOrNull(ctx, ev.field, ev.value)
            })),
            transition(
                'submit',
                'loading',
                guard(ctx =>
                    ctx.email !== null &&
                    ctx.password !== null &&
                    ctx.confirm !== null
                )
            )
        ),
        loading: invoke(
            () => wait(2000),
            transition(
                'done',
                'success',
                reduce((ctx, ev) => ({...ctx, token: 'test'}))
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
      () => ({email: null, password: null, confirm: null, token: null})
)
