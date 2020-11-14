/**
 * @param {string} transitionName
 * @param {Map<string, Array>} transitions 
 * @param {Object} context 
 * 
 * @returns {boolean}
 */
export default function canTransit(transitionName, transitions, context) {
    
    if (! transitions.has(transitionName)) {
        return false
    }

    const transitionsToCheck = transitions.get(transitionName)

    for (const transition of transitionsToCheck) {
        if ((transition.guards && transition.guards(context)) || ! transition.guards) {
            return true
        }
    }

    return false
}
