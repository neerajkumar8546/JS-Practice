//The Number.isNaN() static method determines whether the passed value is the number value NaN, 
//and returns false if the input is not of the Number type. It is a more robust version of the 
//original, global isNaN() function.

function typeOfNaN(x) {
    if (Number.isNaN(x)) {
      return 'Number NaN';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
  }
  
  console.log(typeOfNaN('100F'));
  // Expected output: "NaN"
  
  console.log(typeOfNaN(NaN));
  // Expected output: "Number NaN"

  const num='101N'
  console.log(isNaN(num));
  