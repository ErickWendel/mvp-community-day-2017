'use strict'
const squared = 3 ** 2 
// 9
let num = 3
num **= 2
// 9
const getSquare = (list) => list.map(item => item ** 2)
const squares = getSquare([2, 4, 6, 8])
//  4,16,36,64

