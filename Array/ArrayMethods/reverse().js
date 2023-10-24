// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

// To reverse the elements in an array without mutating the original array, use toReversed().

const array1=[23,2433,54,5,43,66,6,56,4]

console.log(`Reverse of The Arrya : ${array1.reverse()}`);
//Expected result:  4,56,6,66,43,5,54,2433,23
console.log(`Original Array is : ${array1}`);
//Expected result:4,56,6,66,43,5,54,2433,23

//console.log(`Reverse of the Array using ToReverse method : ${array1.toReversed()}`);