// slice() uses start and end indices (inclusive and exclusive).
// substr() uses a start index and a length.
// substring() uses start and end indices (inclusive and exclusive) and does not support negative indices.

//The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

let str='Mozilla'
console.log(str.substring(2,5));
console.log(str.substring(-5,3));