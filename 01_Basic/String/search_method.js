// The search() method of String values executes a search for a match between a regular expression 
// and this string, returning the index of the first match in the string.

let paragraph='The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'

console.log(paragraph.search("dog"));

const reDot = /[.]/;
console.log(paragraph.search(reDot));

const reDot2 = /[?]/;
console.log(paragraph.search(reDot2));
console.log(paragraph.length);