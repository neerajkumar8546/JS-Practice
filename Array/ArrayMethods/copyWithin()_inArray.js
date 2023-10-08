//The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

//copyWithin() modifies the original array in place and does not create a new array. 
const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 2));
// Expected output: Array ["d", "d", "e", "d", "e"]


const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let copiedArray=fruits.copyWithin(4,2,4);

console.log(`Copy elements starting from index 2 (cherry) and paste them starting at index 0: ${fruits.copyWithin(2,2)}`);

console.log(`Copy element starting from index 2(cherry) and paste them starting at index 0: ${copiedArray}`);
