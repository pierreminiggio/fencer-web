export default class StateMachine {

    /** @type {string} */
    state

    /** @type {Object} */
    context

    /**
     * @callback CanFunction
     * 
     * @param {string} transitionName
     * 
     * @returns {boolean}
     */

    /** @type {CanFunction} */
    can

    /**
     * @callback SendFunction
     * 
     * @param {string} type 
     * @param {Object} params 
     */

    /** @type {SendFunction} */
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
