//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

const array1=[2,1,2,3,4,5]

console.log(`before shift operation perform length of the array is: ${array1.length}`);
console.log(`Using Shift method to remove first element of an array : ${array1.shift()}`);
// Expected output:2
console.log(`after shift operation perform length of the array is: ${array1.length}`);