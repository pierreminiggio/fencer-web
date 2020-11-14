export default class AlertData {
    
    /** @type {string} */
    severity

    /** @type {string} */
    message

    /**
     * @param {string} severity 
     * @param {string} message 
     */
    constructor(severity, message) {
        this.severity = severity
        this.message = message
    }
}
