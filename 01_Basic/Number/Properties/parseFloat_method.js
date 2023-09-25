//The Number.parseFloat() static method parses an argument and returns a floating point number.
// If a number cannot be parsed from the argument, it returns NaN.

function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
      return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
  }
  
  console.log(circumference('4.567abcdefgh'));
  // Expected output: 28.695307297889173
  
  console.log(circumference('abcdefgh'));
  // Expected output: 0

  // Parsing a simple floating-point number
var floatValue = parseFloat("3.14");
console.log(floatValue); // 3.14 (floatValue is now a floating-point number)

// Parsing a string with extra whitespace
var floatValueWithWhitespace = parseFloat("  42.5   ");
console.log(floatValueWithWhitespace); // 42.5

// Parsing a string with non-numeric characters
var nonNumericString = "The price is $19.99";
var parsedValue = parseFloat(nonNumericString);
console.log(parsedValue); // 19.99 (parseFloat extracts the first valid number)

// Parsing a string with no valid numeric characters
var invalidString = "Hello, World!";
var result = parseFloat(invalidString);
console.log(result); // NaN (Not-a-Number)

// Parsing a string with exponential notation
var exponentialString = "1.23e+2";
var exponentialValue = parseFloat(exponentialString);
console.log(exponentialValue); // 123 (parseFloat handles exponential notation)
