//In JavaScript, the map() method is a built-in method for arrays. It is used to create a new array by applying a provided function to each element in the calling array. Essentially, it allows you to transform the elements of an array into a new array based on a specified mapping function. The original array remains unchanged, and the map() method returns a new array with the results.

//Syntax:
//const newArray = originalArray.map(callback(currentValue, index, array) {
  // Transform current element here and return the result
//});

const array1=[2,4,6,8]

const square=array1.map((number)=>number*number)

console.log(square);