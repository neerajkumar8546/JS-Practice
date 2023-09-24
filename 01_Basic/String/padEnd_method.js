// The padEnd() method of String values pads this string with a given string (repeated, if needed) 
// so that the resulting string reaches a given length. The padding is applied from the end of this 
// string.

// padEnd method is used to Add a string with a given string within a given length

let str='Breaded Mushrooms'
console.log(str.padEnd(20,'.'));
// Expected output: Breaded Mushrooms...

const str2 = '200';
console.log(str2.padEnd(6,'.00'));
// Expected output: "200  "

console.log("abc".padEnd(10)) // "abc       "
console.log("abc".padEnd(10, "foo")) // "abcfoofoof"
console.log("abc".padEnd(6, "123456")) // "abc123"
console.log("abc".padEnd(1)) // "abc"