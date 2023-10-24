//The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

const arr1 = [1, 2, 3,4,[4,6]];

const result = arr1.flatMap((num) => (num === 4 ? [2, 2] : num));

console.log(result);
// Expected output: Array [1, 2, 2, 1]