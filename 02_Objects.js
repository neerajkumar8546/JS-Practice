const regularuser={
    email:"neerajk.ext@innov.in",
    fullname:{
        UserFullName:{
            FirstName:"Neeraj",
            MiddleName:"",
            LastName:"Kumar"
        },
        FatherFullName:{
            FirstName:"LalBahadur",
            MiddleName:"",
            LastName:""
        },
        MotherFullName:{
            FirstName:"Pushapa",
            MiddleName:"",
            LastName:"Devi"
        }
    },
    DOB:"10-Jan-1998"
}

console.log(regularuser);
console.log(`Regular user Full Name: ${regularuser.fullname.UserFullName.FirstName}${regularuser.fullname.UserFullName.MiddleName} ${regularuser.fullname.UserFullName.LastName}`);

// merger multiple objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj4=Object.assign({},obj1,obj2) //targetobject,source1,source2
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1);//{ '1': 'a', '2': 'b' }

const obj3={...obj1,...obj2}
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users=[
    {
        id:789,
        Name:"Neeraj Kumar",
        email:"neerajk.ext@innov.in"
    },
    {
        id:790,
        Name:"Suraj Kumar",
        email:"surajk.ext@innov.in"
    },
    {
        id:791,
        Name:"Diwakar Kumar",
        email:"Diwakark.ext@innov.in"
    }
]

console.log(`Access first user Email details: ${users[2].email}`);

//Getting all keys of objects
console.log(Object.keys(obj1)); //[ '1', '2' ]

//Getting all keys of objects
console.log(Object.values(obj1));//[ 'a', 'b' ]

// converting all entries to array
// const array1=Object.entries(obj1)
// console.log(array1[0]);
console.log(Object.entries(obj1));//[ [ '1', 'a' ], [ '2', 'b' ] ]

//checking properties is available or not
console.log(regularuser.hasOwnProperty("DOB"));//true