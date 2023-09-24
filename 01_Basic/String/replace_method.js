//The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

let p='The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

console.log(p.replace('dog','monkey'));
// Expected output: The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?
const regexp=/dog/g
console.log(p.replace(regexp,'Monkey'));