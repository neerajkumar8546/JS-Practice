//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

const Array1=[1,2,4,5,6,7,8,,89,9]
console.log(`original Array is : ${Array1}`);
console.log(`Length of original array is : ${Array1.length}`);

console.log(Array1.pop());
console.log(`After POP operation done, Array is : ${Array1}`);
console.log(`After POP operation done,Length of array is : ${Array1.length}`);
