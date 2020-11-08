import { useCallback, useRef, useState } from "react";
import { interpret } from "robot3";

/**
 * @param {import("robot3").Machine} machine 
 */
export function useMachine(machine) {
    const {current: service} = useRef(interpret(machine, () => {
        setState(service.machine.current)
    }))
    const [state, setState] = useState(service.machine.current)
    /**
     * @param {string} type 
     * @param {Object} params 
     */
    const send = useCallback(function(type, params = {}) {
        service.send({type: type, ...params})
    }, [service])

    return [state, send]
}