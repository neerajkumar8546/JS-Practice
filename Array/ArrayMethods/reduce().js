// In JavaScript, the reduce() method is used to reduce an array of values to a single value. It iterates over the elements of an array and applies a specified function to each element to accumulate a single result. This is often used for tasks like summing the elements of an array, finding the maximum or minimum value, or transforming an array into a different data structure.

// The reduce() method takes a callback function as its argument, which is executed for each element in the array. The callback function accepts four parameters:

// Accumulator: A value that accumulates the results of each iteration.
// Current Value: The current element being processed in the array.
// Current Index (optional): The index of the current element being processed.
// Array (optional): The array to which the reduce() method was applied.
// Here's the basic syntax for using reduce():

// javascript
// Copy code
// array.reduce(callback, initialValue);
// callback: A function to be executed on each element of the array. It should take at least two parameters: the accumulator and the current value.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value, and iteration starts from the second element.
// Here are a few common examples of how to use reduce():

// Summing the elements of an array:
const numbers = [12, 6, 23, 8, 18];//[1, 2, 3, 4, 5];
const str = ['a','b', 'c','d','e','f'];

const sumofarray=numbers.reduce((a,b)=>a+b,0) //it taking first two value 1+2=3 the taking 3+3=6, then taking 6+4=10, then taking 10+5=15 is return output
console.log(sumofarray);
//Expected output:15

const sumofarray2=str.reduce((a,b)=>a+b) //it taking first two value 1+2=3 the taking 3+3=6, then taking 6+4=10, then taking 10+5=15 is return output
console.log(sumofarray2);
//Expected output:15


// Finding the max elements of an array:
const maxnumber=numbers.reduce((a,b)=>Math.max(a,b),-Infinity)
console.log(`Max item of this array: ${maxnumber}`);

// Finding the min elements of an array:
const minnumber=numbers.reduce((a,b)=>Math.min(a,b))
console.log(`Min item of this array: ${minnumber}`);

