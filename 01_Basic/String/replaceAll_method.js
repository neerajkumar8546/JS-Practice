// The replaceAll() method of String values returns a new string with all matches of a pattern 
// replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a
//  string or a function to be called for each match. The original string is left unchanged.

let str='The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

console.log(str.replaceAll('dog','monkey'));

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(str.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"