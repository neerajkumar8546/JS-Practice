// The String.fromCodePoint() static method returns a string created from the specified sequence
//  of code points.

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"

String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"


// String.fromCodePoint("_"); // RangeError
// String.fromCodePoint(Infinity); // RangeError
// String.fromCodePoint(-1); // RangeError
// String.fromCodePoint(3.14); // RangeError
// String.fromCodePoint(3e-2); // RangeError
// String.fromCodePoint(NaN); // RangeError