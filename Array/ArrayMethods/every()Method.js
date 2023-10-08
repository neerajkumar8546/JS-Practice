// is used to check if all elements in an array satisfy a specified condition. It iterates through the array and returns true if the provided callback function returns true for every element in the array. If any element fails the condition, it returns false.

const numbers = [1, 2, 3, 4, 5];

// Check if all elements in the array are even
const allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // Output: false (not all elements are even)


const words = ['apple', 'banana', 'cherry', 'date'];

console.log(`Check if all elements in the array have a length greater than 3: ${words.every(word=>words.length>4)}`);
