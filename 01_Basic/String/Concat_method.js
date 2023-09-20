// The concat() method of String values concatenates the string arguments to this string
//  and returns a new string.

let FirstName="Neeraj"
let LastName="Kumar"

console.log(FirstName.concat(' ',LastName));

const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)) // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"