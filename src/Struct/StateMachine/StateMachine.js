export default class StateMachine {

    /** @type {string} */
    state

    /** @type {Object} */
    context

    /** @type {Function} */
    can

    /** @type {Function} */
    send

    /**
     * @param {string} state 
     * @param {Object} context 
     * @param {Function} can 
     * @param {Function} send 
     */
    constructor(state, context, can, send) {
        this.state = state
        this.context = context
        this.can = can
        this.send = send
    }
}
