//singleton [Object.Create()-using constructor method]

//object literals
//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

//Declare symbol datatype
const MySymbol=Symbol("Key1")

const JsUser={
    name:"Neeraj",
    [MySymbol]:"HelloWorld",
    "Full Name":"Neeraj Kumar",
    age:25,
    location:"Gorakhpur",
    email:"neerajkumar8546@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// Key is treating as a string like - name,fullname,age...
console.log(`Getting object value using dot : ${JsUser.email}`);
console.log(`Getting Object value using brackets : ${JsUser["email"]}`);
console.log(`Can't Access value using dot: ${JsUser["Full Name"]}`);
console.log(`Access Symbol datatype in objects : ${JsUser[MySymbol]} & Type of this datatype: ${typeof(JsUser[MySymbol])}`);


// change value of objects:

JsUser.age=23
console.log(`After changing value of age , Age is :${JsUser.age}`);

// Add new data in objects:

JsUser.password="Neeraj@8546"
console.log(`After Adding Password data in JsUser , Password is :${JsUser .password}`);

// Delete data in objects:

delete JsUser["Full Name"]
console.log(`After Deleting Full Name from JsUser Objects , Full Name is :${JsUser["Full Name"]}`);


//Freeze object
//Object.freeze(JsUser)       //can't modify the object data

JsUser.isLoggedIn=true
console.log(JsUser);
// expected output: 
//  {
//     name: 'Neeraj',
//     age: 23,
//     location: 'Gorakhpur',
//     email: 'neerajkumar8546@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'monday', 'saturday' ],
//     password: 'Neeraj@8546',
//     [Symbol(Key1)]: 'HelloWorld'
//   }


//define a function in objects

JsUser.greeting=function(){
    console.log(`Greeting function inside jsuser object : ${this.name}`);
}

//console.log(JsUser.greeting); //output: [Function (anonymous)]
console.log(JsUser.greeting()); // using jsuser.greeting -: only get reference is defined not execute


