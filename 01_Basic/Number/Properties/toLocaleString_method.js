//The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. In implementations with Intl.NumberFormat API support, this method simply calls Intl.NumberFormat.

let balance=100000000

console.log(balance.toLocaleString('en-IN'));
// German uses comma as decimal separator and period for thousands
console.log(balance.toLocaleString("de-DE"));