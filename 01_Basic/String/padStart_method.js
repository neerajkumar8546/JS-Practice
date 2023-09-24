// The padStart() method of String values pads this string with another string (multiple times,
//      if needed) until the resulting string reaches the given length. The padding is applied from
//       the start of this string.


const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"


console.log("abc".padStart(10)) // "abc       "
console.log("abc".padStart(10, "foo")) // "abcfoofoof"
console.log("abc".padStart(6, "123456")) // "abc123"
console.log("abc".padStart(1)) // "abc"