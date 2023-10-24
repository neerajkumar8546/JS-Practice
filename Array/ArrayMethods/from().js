//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or 
//array-like object.


//This method is used to create a new array from an iterable object (e.g., an array-like object, a string, a Set, a Map, etc.), with an optional mapping function to transform the elements. Here's how you can use it:

// Syntax:- Array.from(iterable[, mapFunction[, thisArg]])

// iterable: This is the source iterable object, such as an array, a string, a Set, or any other iterable.

// mapFunction (optional): A function that is called for each element in the iterable to map or transform the elements before adding them to the new array. This function is optional.

// thisArg (optional): An object to use as this when executing the mapFunction.

// Example 1: Creating an array from a string:

const name='Neeraj Kumar'

console.log(Array.from(name));
// expected output [
//     'N', 'e', 'e', 'r',
//     'a', 'j', ' ', 'K',
//     'u', 'm', 'a', 'r'
//   ]

//Example 2: Using a mapping function to create a new array:

const number=[1,2,3,4]

const squareNumber=Array.from(number,(num)=>num*num)

console.log(`Square Of the Array element: ${squareNumber}`);
//expected output Square Of the Array element: 1,4,9,16

//Example 3: Using thisArg with mapFunction:

const cubeNumber=Array.from(number,function(num){
    return num*num*num;
})

console.log(`Cube Of Number Array : ${cubeNumber}`);
// expected output Cube Of Number Array : 1,8,27,64

//Array.from() is a useful method for converting iterable objects into arrays and performing transformations on the elements during the process.