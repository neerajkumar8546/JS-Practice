/* The at() method of String values takes an integer value and returns a new String 
consisting of the single UTF-16 code unit located at the specified offset. 
This method allows for positive and negative integers. Negative integers count 
back from the last string character.*/

let Sentence="The quick brown fox jumps over the lazy dog."
let index=5
console.log(`Using an index of ${index} the character returned is ${Sentence.at(index)}`);

let indexs=-4
console.log(`Using an index of ${indexs} the character returned is ${Sentence.at(indexs)}`);

console.log(typeof Sentence.at(7));