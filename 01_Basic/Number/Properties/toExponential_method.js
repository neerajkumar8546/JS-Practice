//The toExponential() method of Number values returns a string representing this number 
//in exponential notation.

let number=3.14564664

console.log(number.toExponential(2));

var num = 12345.6789;

// Using toExponential() without specifying the number of decimal places
var exponentialNotation = num.toExponential();
console.log(exponentialNotation); // "1.23456789e+4" (default is to include all significant digits)

// Using toExponential() with a specified number of decimal places
var exponentialNotationWithDecimalPlaces = num.toExponential(2);
console.log(exponentialNotationWithDecimalPlaces); // "1.23e+4" (rounded to 2 decimal places)

// Using toExponential() with a specified number of decimal places and converting back to a number
var exponentialString = num.toExponential(3);
var convertedBackToNumber = parseFloat(exponentialString);
console.log(convertedBackToNumber); // 12345.679 (parsed back to a number)

