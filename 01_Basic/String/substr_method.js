// The substr() method of String values returns a portion of this string, starting at the specified 
// index and extending for a given number of characters afterwards.

const str = 'Mozilla';

console.log(str.substr(1, 2));
// Expected output: "oz"

console.log(str.substr(2));
// Expected output: "zilla"

console.log(str.substr(1,3));
console.log(str.sub(-5,3));


// Slice is treated negative value as reverse but substring is treated negative value is 0.
// substr method is taking two argument first is: start index and second is: length specifies how many characters should be included in the substring
