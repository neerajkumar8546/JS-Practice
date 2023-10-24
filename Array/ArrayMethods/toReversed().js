//The toReversed() method of Array instances is the copying counterpart of the reverse() method. It
// returns a new array with the elements in reversed order.
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.reverse();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

console.log([1, , 3].reverse()); // [3, undefined, 1]
