'use strict'
//before 
const numberInArray = (list, item) => list.indexOf(item) !== -1
//after
const numberInArrayWithIncludes = (list, item) => list.includes(item)
const myList = [1, 2, 3];
const withIndexOf = numberInArray(myList, 2)
const withIncludes = numberInArrayWithIncludes(myList, 2)
// withIndexOf true
// withIncludes true
 
