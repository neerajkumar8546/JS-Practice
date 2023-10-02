let newDate=new Date()
console.log(`Date Output: ${newDate}`);
// Expected output: 2023-10-02T14:08:41.406Z

console.log(`Date format using toString: ${newDate.toString()}`);
//Expected output: Mon Oct 02 2023 14:09:24 GMT+0000 (Coordinated Universal Time)

console.log(`Date format using toDateString : ${newDate.toDateString()}`);
// Expected date output: Mon Oct 02 2023

console.log(`Date format using toISOStrig : ${newDate.toISOString()}`);
//Expected output : 2023-10-02T14:16:18.177Z

console.log(`Date format using toJSON() : ${newDate.toJSON()}`);
//Expected output : 2023-10-02T14:17:50.506Z

console.log(`Date format using toLocaleString() : ${newDate.toLocaleString()}`);
//Expected output : 10/2/2023, 2:24:40 PM

console.log(`Date format using toLocaleDateString() : ${newDate.toLocaleDateString()}`);
//Expected output : 10/2/2023