//The lastIndexOf() method of Array instances returns the last index at which a given element can be 
//found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//find element in starting but findlastindex is find element reverse order.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(`last index of Dogo ${animals.lastIndexOf('Dodo')}`);
// Expected output: 3

console.log(`last index of Dogo ${animals.lastIndexOf('Dogo')}`);
// Expected output: -1