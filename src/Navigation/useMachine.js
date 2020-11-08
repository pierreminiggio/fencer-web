import { useState } from "react";
import { interpret } from "robot3";

/**
 * @param {import("robot3").Machine} machine 
 */
export function useMachine(machine) {
    const service = interpret(machine, () => {
        setState(service.machine.current)
    })
    const [state, setState] = useState(service.machine.current)

    return [state]
}