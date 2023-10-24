//The indexOf() method of Array instances returns the first index at which a given element can be found
// in the array, or -1 if it is not present.


const array1=[1,2,3,4,5,6,7,8,9,0,5]

console.log(array1.indexOf(5));
// Expected output: 4

console.log(array1.indexOf(5,5));
// Expected output: 4

console.log(array1.indexOf(55));
// Expected Output: -1