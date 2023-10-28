//Object destructuring

const course={
    coursename:"JS",
    courseprice:"999",
    courseInstructor:"Hitesh"
}

const {coursename:name}=course

console.log(name);