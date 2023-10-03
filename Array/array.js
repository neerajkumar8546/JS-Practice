//The Array object, as with arrays in other programming languages, enables storing a collection of
// multiple items under a single variable name

//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes
//JavaScript arrays are zero-indexed
//JavaScript array-copy operations create shallow copies.


//Shallow Copy [Heap]:-A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
//Deep Copy [Stack]:- A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too

const number=[1,3,4,5,6,7,43,35,5,65,6,,33]

const heros=['Tony Stark','Allu Arjun','nagarjun','Prabhash']

const MyDetails=new Array('Neeraj',25,'B.tech','M',8317076281)

console.log(number)
console.log(heros)
console.log(MyDetails)