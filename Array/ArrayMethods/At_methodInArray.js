//The at() method of Array instances takes an integer value and returns the item at that index,
// allowing for positive and negative integers. Negative integers count back from the last item in 
//the array.

const data=['g',5,6,3,'neeraj',25,1998,'kumar']
let index=4
console.log(`Items At ${index} index: ${data.at(index)}`);
let ind=-1
console.log(`Items At ${index} index: ${data.at(ind)}`);