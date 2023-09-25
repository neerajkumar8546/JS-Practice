// The Number.EPSILON static data property represents the difference between 1 and the smallest 
//floating point number greater than 1.

const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// Expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// Expected output: true