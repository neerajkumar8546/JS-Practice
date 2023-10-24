//The join() method of Array instances creates and returns a new string by concatenating all of the 
//elements in this array, separated by commas or a specified separator string. If the array has only 
//one item, then that item will be returned without using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(typeof(elements.join()));//String
//Expected output: Fire,Air,Water

console.log(elements.join('-'));
// Expected output:Fire-Air-Water

console.log(elements.join(""));
// Expected output:FireAirWater


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
  console.log(matrix.join(';'));//1,2,3;4,5,6;7,8,9


  const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2