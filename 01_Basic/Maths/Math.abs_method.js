function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(3, 5));
  // Expected output: 2
  
  console.log(difference(5, 3));
  // Expected output: 2
  
  console.log(difference(1.23456, 7.89012));
  // Expected output: 6.6555599999999995

//console.log(Math);
console.log(Math.abs(-450));

Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity


Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN