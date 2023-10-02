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


//++++++++++++++++++++++++++++++++++++Time++++++++++++++++++++++++++++
let myTimeStamp=Date.now()
let myCreatedDate=new Date("01-07-2023")
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp/1000));

let newDate2=new Date()
console.log(newDate2);
console.log(newDate2.getDay())

console.log(newDate2.toLocaleString('default',{
    //weekday:"short",  //Mon
    //dateStyle:"full"  //Monday, October 2, 2023
    //day:"2-digit"  //02
    //dayPeriod:"narrow"  //in the afternoon
    //era:"long"  //10/2/2023 Anno Domini, 5:01:56 PM
    
}
));