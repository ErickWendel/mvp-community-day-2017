'use strict'
const myObject = { image: '//erickwendel.com.br/logo.png', text: 'My WebSite' }
//before
const valuesBefore = Object.keys(myObject).map(key => myObject[key])
//  [ '//erickwendel.com.br/logo.png', 'My WebSite' ]

//after
const values = Object.values(myObject)
// [ '//erickwendel.com.br/logo.png', 'My WebSite' ]

const entries = Object.entries(myObject)
//[  
//   [ 'image', '//erickwendel.com.br/logo.png' ],
//   [ 'text', 'My WebSite' ] 
//]

