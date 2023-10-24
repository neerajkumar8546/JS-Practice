//The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const Array1=['dsad','dasdada','asdasdd','rwerd','vdsdd','ertee']
let findlastindex=Array1.findLastIndex((word)=>word.length>5)//Array1.findlastindex((number)=>number.length>3)

let findlast=Array1.findLast((word)=>word.length>5)

console.log(`Find Last Index of :${findlastindex}`);
console.log(`Find Last value of :${findlast}`);