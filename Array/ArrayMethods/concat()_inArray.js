//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const Array1=['a','b','c']
const Array2=['d','e','f']

let Array3=Array1.concat(Array2)

console.log(`Concat Array1 & Array2 : ${Array3}`);

console.log(`Original Array1: ${Array1}`);
console.log(`Original Array1: ${Array2}`);