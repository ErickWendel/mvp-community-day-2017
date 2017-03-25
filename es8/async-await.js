'use strict'
function getUserName() {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve('Erick')))
}
function saveUser(userName) {
 
    return new Promise((resolve, reject) =>
        setTimeout(() => reject({ userName, date: '04/25/1995' })))
}

async function run() {
    try {
        const userName = await getUserName()
        return await saveUser(userName)
    }
    catch (e) {
        throw e
    }
}

run()
    .then(success => console.log(`Success: ${JSON.stringify(success)}`))
    .catch(error => console.error(`Error: ${JSON.stringify(error)}`))
//Success: {"userName":"Erick","date":"04/25/1995"}


