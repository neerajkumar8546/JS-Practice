const inputString = "Hello World! This Is An Example.";

// Define the regular expression
const regex = /[A-Z]/g;

// Use the matchAll() method to find all uppercase letters in the string
const matchIterator = inputString.matchAll(regex);

// Loop through the matchIterator to access each match
for (const match of matchIterator) {
  console.log("Match:", match[0]); // Access the matched substring
  console.log("Index:", match.index); // Access the start index of the match
  console.log("Input:", match.input); // Access the input string
}


// Here's a summary of the differences between match() and matchAll():

// Return Value:

// match(): The match() method returns an array of the first match found in the input string. If the regular expression has the global (g) flag, it will return an array of all matches, but without detailed match information.

// matchAll(): The matchAll() method returns an iterator containing detailed information about all matches found in the input string. Each element of the iterator is an object representing a match and includes information like the matched substring, index, and input string.



