'use strict'
class Person extends People {
    constructor () {
        this._name = ''
    }
    get name() {
        return this._name
    }
    set name (name){
        this._name = name
    }
    static run () {}
} 



