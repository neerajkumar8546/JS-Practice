// The toLocaleLowerCase() method of String values returns this string converted to lower case, 
// according to any locale-specific case mappings.

const dotted = 'İstanbul';
console.log(dotted);
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"

const text = "TÜRKİYE İSTANBUL";
const turkishLocale = "tr-TR"; // Turkish locale

const lowerCaseText = text.toLocaleLowerCase(turkishLocale);
console.log(`tr-TR:${lowerCaseText}`); // Output: "türkiye i̇stanbul"
console.log(`EN-US:${text.toLocaleLowerCase('en-US')}`);
