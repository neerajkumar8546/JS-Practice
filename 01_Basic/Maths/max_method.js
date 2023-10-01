//The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

let age=[23,2433,54,5,43,66,6,56,4]

console.log(Math.max(...age));
console.log(Math.max.apply(null,age));