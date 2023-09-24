//The toString() method of String values returns this string value.

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

console.log(typeof(stringObj));
console.log(typeof(stringObj.toString()));