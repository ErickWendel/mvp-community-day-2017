'use strict'
const defaultString = 'Erick'
defaultString.padStart(10)
//// "    Erick"
defaultString.padStart(10, '-')
//// "----Erick"
defaultString.padEnd(6, '123123')
//// "Erick1"

