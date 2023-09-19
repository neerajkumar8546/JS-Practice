// how to save data and how to get data is defined two type of datatypes:-

//Premitive data types:-
//   String,Number,Boolean,null,undefined,Symbol,Bigint
const score=100
const score2=100.3

const isLoggedIn=true
let OutSideTemp=null

let useremail

const Id=Symbol('123')
const anotherid=Symbol('123')

// console.log(Id)
// console.log(anotherid)

//console.log(Id===anotherid) //symbol return the diff id


const myObject = {}
myObject[Id] = 'Neeraj@546'

//console.log(myObject[Id]);

let bigintvalue=53633664564547n

//console.log(bigintvalue)


// Reference Type (Non-premitive)

// Array,Objects,Function

let Arrayex=["Hello","How","Are","You"]
let My_Object={
    Name:"Neeraj",
    Age:25,
    Degree:["B.tech","M.Tech"],
    AnotherObject:myObject
}

console.log(Arrayex)
console.log(My_Object)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(Primitive), Heap(Primitive)

let myyoutubename='hiteshchaudhary.com'

let anothername=myyoutubename

anothername='neerajk_Study98'

// console.log(myyoutubename)
// console.log(anothername)

let userOne={
    email:"neerajk.ext@innov.in",
    upi:"neerajk8546@ybl"
}

let userTwo=userOne

userTwo.email='neerajkumar8546@gmail.com'

// Primitive data type is not changed original value only changed copy value
// non-primitive data type is changed original value

console.log(userTwo)

