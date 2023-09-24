// In JavaScript, the normalize() method is used to normalize Unicode strings, specifically dealing with different forms of character encodings. This method helps in ensuring consistency when working with text containing characters that can be represented in multiple ways. Unicode normalization is especially relevant when dealing with internationalization and localization of web applications.

// The normalize() method takes an optional argument specifying the normalization form to apply. The commonly used forms are:

// "NFC" (Normalization Form Canonical Composition): This form composes characters into their most composed form. It's suitable for most use cases and is the default if you don't specify a form.

// "NFD" (Normalization Form Canonical Decomposition): This form decomposes characters into their constituent parts.

// "NFKC" (Normalization Form Compatibility Composition): This form performs compatibility composition, which includes additional compatibility mappings.

// "NFKD" (Normalization Form Compatibility Decomposition): This form decomposes characters into their compatibility decompositions.

// Here's an example of how to use normalize() with different normalization forms:

const text = "Café"; // The 'é' character can be represented in multiple ways

// Normalize using NFC (Canonical Composition)
const nfcNormalized = text.normalize("NFC");
console.log("NFC Normalized:", nfcNormalized); // Output: Café

// Normalize using NFD (Canonical Decomposition)
const nfdNormalized = text.normalize("NFD");
console.log("NFD Normalized:", nfdNormalized); // Output: Café

// Normalize using NFKC (Compatibility Composition)
const nfkcNormalized = text.normalize("NFKC");
console.log("NFKC Normalized:", nfkcNormalized); // Output: Cafe

// Normalize using NFKD (Compatibility Decomposition)
const nfkdNormalized = text.normalize("NFKD");
console.log("NFKD Normalized:", nfkdNormalized); // Output: Café


// The input text "Café" contains the letter 'é,' which can be represented in different ways in Unicode.

// We use the normalize() method with different forms to see how the text is normalized.

// "NFC" combines characters into their composed form, resulting in "Café".

// "NFD" decomposes characters into their constituent parts, resulting in "Café".

// "NFKC" performs compatibility composition, removing any compatibility characters, resulting in "Cafe".

// "NFKD" decomposes characters into their compatibility decompositions, resulting in "Café".