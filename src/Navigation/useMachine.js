import { useCallback, useRef, useState } from "react";
import { interpret } from "robot3";
import canTransit from "../Struct/StateMachine/canTransit";

/**
 * @param {import("robot3").Machine} machine 
 * 
 * // TODO type return
 */
export function useMachine(machine) {
    const {current: service} = useRef(interpret(machine, () => {
        setState(service.machine.current)
        setContext(service.context)
    }))
    const [state, setState] = useState(service.machine.current)
    const [context, setContext] = useState(service.context)
    
    const send = useCallback(
        /**
         * @param {string} type 
         * @param {Object} params 
         */
        function(type, params = {}) {
            service.send({type: type, ...params})
        }, [service]
    )

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

    return [state, context, send, can]
}