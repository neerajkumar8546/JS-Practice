// The split() method of String values takes a pattern and divides this string into an ordered list 
// of substrings by searching for the pattern, puts these substrings into an array, and returns the 
// array.

// split() Method:

// split() is a method for strings. It is used to split a string into an array of substrings based on a specified delimiter (separator).
// It takes a single argument, which is the delimiter or regular expression used to split the string.
// It returns an array of substrings.
// It does not modify the original string but creates a new array.

// slice() Method:

// slice() is a method for arrays and strings. It is used to extract a portion (a slice) of an array or a substring from a string.
// For arrays, it takes one or two arguments, which represent the start and end indices of the slice. It returns a new array containing the selected elements.
// For strings, it also takes one or two arguments, which represent the start and end indices of the substring to be extracted. It returns a new string containing the selected characters.
// It does not modify the original array or string.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
