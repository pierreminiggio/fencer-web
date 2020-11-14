import { useCallback, useRef, useState } from 'react'
import { interpret } from 'robot3'
import canTransit from './canTransit'
import StateMachine from './StateMachine'

/**
 * @param {import("robot3").Machine} machine 
 * 
 * @returns {StateMachine}
 */
export function useMachine(machine) {
    const {current: service} = useRef(interpret(machine, () => {
        setState(service.machine.current)
        setContext(service.context)
    }))
    const [state, setState] = useState(service.machine.current)
    const [context, setContext] = useState(service.context)
    
    const can = useCallback(
        /**
         * @param {string} transitionName
         * 
         * @returns {boolean}
         */
        (transitionName) => {
            return canTransit(transitionName, service.machine.state.value.transitions, service.context)
        },
        [service.context, service.machine.state.value.transitions]
    )

    const send = useCallback(
        /**
         * @param {string} type 
         * @param {Object} params 
         */
        function(type, params = {}) {
            service.send({type: type, ...params})
        }, [service]
    )

    return new StateMachine(state, context, can, send)
}
