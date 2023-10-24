//The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array1=[0, 1, 2, 3, 4]

const sumofArrayElemnetusingRightReduce=array1.reduceRight((accumulator,currentValue)=>accumulator+currentValue)
console.log(`Sum of Array Element using Reduce Right ${sumofArrayElemnetusingRightReduce}`);

//              accumulator	currentValue	index	Return value
// First call	    4	        3           3  	        7
// Second call	    7	        2           2  	        9
// Third call	    9	        1	        1	        10
// Fourth call	    10	        0           0           10