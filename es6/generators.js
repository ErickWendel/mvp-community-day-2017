'use strict'
const Co = require('co')
function timeOut() {
    return new Promise(resolve => setTimeout(() => resolve('success'), 500))
}

function* myAsyncFunction() {
    const timeResult = yield timeOut()
    return { timeResult, from: 'Brazil' }
}

Co(function* () {
    console.log(yield myAsyncFunction())
})
//{ timeResult: 'success', from: 'Brazil' }




