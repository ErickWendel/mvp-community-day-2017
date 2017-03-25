'use strict'
function getUserName () {
    return new Promise((resolve, reject) => 
            setTimeout(() => resolve('Erick')))
}
function saveUser (userName) {
    return new Promise((resolve, reject) => 
            setTimeout(() => resolve({userName, date: '04/25/1995'})))
}

async function run() {
    const userName = await getUserName() 
    return await saveUser(userName)
} 

run()
    .then(success => console.log(`Success: ${JSON.stringify(success)}`))
    .catch(error => console.error(`Error: ${error}`))
//Success: {"userName":"Erick","date":"04/25/1995"}


