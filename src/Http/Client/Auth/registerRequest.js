import API from '../API'

/**
 * @param {string} login 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns {Promise}
 */
export default function registerRequest(login, email, password) {
    return new Promise((resolve, reject) => {
        reject(new Error('test'))
        /*
        fetch(API.url + '/register', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({login, email, password})
        }).then((response) => {
            if (! response.ok) {
                throw Error(response.statusText)
            }
            return response;
        }).then(response => {
            resolve(response.json())
        }).catch(error => {
            reject(new Error('test'))
        })*/
    })
}
