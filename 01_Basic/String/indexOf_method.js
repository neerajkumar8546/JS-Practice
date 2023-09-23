// The indexOf() method of String values searches this string and returns the index of the
//  first occurrence of the specified substring. It takes an optional starting position and 
//  returns the first occurrence of the specified substring at an index greater than or equal to
//   the specified number.

let str="The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?"

console.log(str.indexOf("lazy"))
console.log(str.indexOf("lazy",50))

console.log(`${str.charAt(78)} and ${str.charAt(79)}`)

// includes is search string and indexof is also searching sub string but diffrence is includes return true if find substring otherwise return false & indexof return the index of the substring find first occurance.