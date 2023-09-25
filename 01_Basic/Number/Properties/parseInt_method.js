//The Number.parseInt() static method parses a string argument and returns an integer of the 
//specified radix or base.

// Parsing a decimal number (radix 10 is assumed by default)
var decimalValue = parseInt("42");
console.log(decimalValue); // 42 (decimalValue is now an integer)

var decimalValue = parseInt("45.00");
console.log(decimalValue); // 45 (decimalValue is now an integer)

// Parsing a binary number (radix 2)
var binaryValue = parseInt("1010", 2);
console.log(binaryValue); // 10 (binaryValue is parsed as base-2)

// Parsing an octal number (radix 8)
var octalValue = parseInt("75", 8);
console.log(octalValue); // 61 (octalValue is parsed as base-8)

// Parsing a hexadecimal number (radix 16)
var hexValue = parseInt("1A", 16);
console.log(hexValue); // 26 (hexValue is parsed as base-16)

// Parsing a string with non-numeric characters
var nonNumericString = "The answer is 42!";
var parsedValue = parseInt(nonNumericString);
console.log(parsedValue); // 42 (parseInt extracts the first valid number)

// Parsing a string with no valid numeric characters
var invalidString = "Hello, World!";
var result = parseInt(invalidString);
console.log(result); // NaN (Not-a-Number)
