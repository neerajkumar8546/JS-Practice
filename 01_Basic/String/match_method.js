// The match() method of String values retrieves the result of matching this string against 
// a regular expression.

let sentence='The quick brown fox jumps over the lazy dog. It barked.'

let found=/[A-Z]/g
let check=/[a-z]/g

let FoundChar=sentence.match(found)
console.log(FoundChar[0]);
console.log(sentence.match(found));
console.log(sentence.match(check));