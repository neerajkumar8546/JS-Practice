//The Number.isSafeInteger() static method determines whether the provided value is a number that 
//is a safe integer.

function warn(x) {
    if (Number.isSafeInteger(x)) {
      return 'Precision safe.';
    }
    return 'Precision may be lost!';
  }
  
  console.log(warn(Math.pow(2, 53)));
  // Expected output: "Precision may be lost!"
  
  console.log(warn(Math.pow(2, 53) - 1));
  // Expected output: "Precision safe."

  console.log(`Max safe integer value : ${Number.isSafeInteger(9007199254740991)}`);
  console.log(`UnSafe Integer value : ${Number.isSafeInteger(9007199254740992)}`);
  
console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger("3")); // false
console.log(Number.isSafeInteger(3.1)); // false
console.log(Number.isSafeInteger(3.0)); // true