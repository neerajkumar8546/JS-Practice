//The some() method of Array instances tests whether at least one element in the array passes the
// test implemented by the provided function. It returns true if, in the array, it finds an element 
//for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];
const number = [1,3, 5, 7, 9];

const iseven=array.some((item)=>item%2==0)
console.log(`Check even number are available or not in array: ${iseven}`);


console.log(`Check even number are available or not in array: ${number.some((item)=>item%2==0)}`);