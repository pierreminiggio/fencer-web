/**
 * @param {Object} object 
 * @param {string} key 
 * @param {string} value 
 * 
 * @returns {Object}
 */
export default function addStringValueOrNull(object, key, value) {
    const newObject = {...object}
    newObject[key] = value !== '' ? value : null

    return newObject
}
