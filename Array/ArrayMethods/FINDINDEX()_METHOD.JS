//The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

let NUMBER=[2,3,34,343,4343,39,43,3]

let findindex=NUMBER.findIndex((NUMBER)=>NUMBER<5)

console.log(findindex);
// expected output:0