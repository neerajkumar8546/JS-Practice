// It's used to get the raw string form of template literals — that is, substitutions 
// (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.


const name = "Alice";
const age = 30;

const rawString = String.raw`Hello, my name is ${name}.\nI am ${age} years old.`;
const rawString2 =`Hello, my name is ${name}.\nI am ${age} years old.`;

console.log(rawString)
console.log(rawString2)