// CodePointAt() is used to return a non-negative integer value i.e, the method returns the Unicode
// value at an index (position) in a string.

// charCodeAt() is UTF-16 - return UTF-16 Code of the string
// codePointAt() is Unicode  -> return Unicode of the string

let names="Neeraj"

console.log(`Unicode of the string: ${names}\n`);

for(let i=0;i<names.length;i++)
{
    const result = names.codePointAt(i);
    console.log(result);
}

// 78
// 101
// 101
// 114
// 97
// 106