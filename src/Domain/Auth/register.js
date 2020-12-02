import {createMachine, guard, invoke, reduce, state, transition} from 'robot3'
import addStringValueOrNull from '../../Struct/Object/addStringValueOrNull'
import registerRequest from '../../Http/Client/Auth/registerRequest'

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
                    ctx.login !== null &&
                    ctx.email !== null &&
                    ctx.password !== null &&
                    ctx.confirm !== null
                )
            )
        ),
        loading: invoke(
            async () => {
                await registerRequest('test', 'test', 'test'/*ctx.login, ctx.email, ctx.password*/)
                return {token: 'test'}
            },
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
        success: state(transition('dismiss', 'form')),
        error: state(transition('dismiss', 'form'))
    },
    () => ({
        login: null,
        email: null,
        password: null,
        confirm: null,
        token: null
    })
)
