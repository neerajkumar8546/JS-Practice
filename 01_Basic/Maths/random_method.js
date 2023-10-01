//The Math.random() static method returns a floating-point, pseudo-random number that's greater 
//than or equal to 0 and less than 1, with approximately uniform distribution over that range —
// which you can then scale to your desired range. The implementation selects the initial seed to 
//the random number generation algorithm; it cannot be chosen or reset by the user.

// console.log(Math.random());
// console.log(Math.random());

//console.log((Math.random()*100)+1);

const min=100
const max=200

for(let i=0;i<=10;i++)
console.log(((Math.random()*(max-min+1))+min).toFixed(0));