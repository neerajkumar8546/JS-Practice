//The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const Array1=[1,2,3,4,,4,2,242,5,35,3,53,453,45,3]

let FINDLAST=Array1.findLast((number)=>number<0)

console.log(`FIND LAST INDEX OF SATISFIED CONDITIONS: ${FINDLAST}`);
//FIND LAST INDEX OF SATISFIED CONDITIONS: 45
//FIND LAST INDEX OF SATISFIED CONDITIONS: undefined
