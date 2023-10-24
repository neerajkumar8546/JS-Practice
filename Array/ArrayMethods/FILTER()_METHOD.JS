//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// it does not change original arrays
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let filterdArray=words.filter((word)=>word.length>6);

console.log(`Create a array of length of 6 : ${filterdArray}`);
//Create a array of length of 6 : exuberant,destruction,present

console.log(`Original Array is : ${words}`);
