// The charCodeAt() method of String values returns an integer between 0 and 65535 
// representing the UTF-16 code unit at the given index.

//Taking index(integer) value in charCodeAt() and return UTF-16 code of the string of given index 

let sentence="The quick brown fox jumps over the lazy dog."

console.log(`The character code is ${sentence.charCodeAt(4)}, and character is ${sentence.charAt(4)}`);