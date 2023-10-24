//The keys() method of Array instances returns a new array iterator object that contains the keys for
// each index in the array.

const Array1=[1,2,3,4,5,6]

const iterator=Array1.keys();

for(const key of iterator)
{
    console.log(key);
}