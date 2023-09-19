// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return 
// lone surrogates. To get the full Unicode code point at the given index, use
//  String.prototype.codePointAt() and String.fromCodePoint().

//Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(-3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);