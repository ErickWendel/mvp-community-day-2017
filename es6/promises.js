'use strict'
class UserService {
    static save(obj, callback) {
        return setTimeout(() => callback(null, 'Salvou'), 500)
    } 
}

function myAsyncOperation() {
    return new Promise((resolve, reject) => {
        return UserService.save({}, (error, result) => {
            if(error) return reject(error)

            return resolve(result)
        })
    })
}

myAsyncOperation()
    .then(success => console.log(`Success: ${success}`))
    .catch(error => console.log(`Error ! ${error}`))

