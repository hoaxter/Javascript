// const tinderUser = new Object() // singleton object

const tinderUser = {}    // declaring object

tinderUser.id = "123abc" // here we are adding key and value to object
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {  // nested object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nitin",
            lastname: "sikarwar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// merging object
const obj1 = {1: "a", 2: "b"}  
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // this will make object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4) // we can instead use assing and {} is optional parameter means the object after combining will go into a blank object if not given it will go in the obj1
                              // target, source

const obj3 = {...obj1, ...obj2} // we can also use this to combine objects
console.log(obj3);

const users = [  // objects inside array
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // will print its keys  output datatype will be in array
console.log(Object.values(tinderUser)); // will print its values             ||
console.log(Object.entries(tinderUser)); // will print its entries both keys and value its return in array inside array type

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if the property is inside the object

// Destructring of object 

const course = {  
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nitin"
}

console.log(course.courseInstructor);   // in this we have to write course.courseInstructor again and again if we want to print multiple time

const {courseInstructor: instructor} = course // instead here we can extract courseInstructor property from object course and even give its a nickname instructor
// console.log(courseInstructor);  // now we dont have to write course. thing
console.log(instructor);  // using nickname

// API 
// API ek bridge (pul) ki tarah hoti hai jo do alag software applications ko aapas mein baat karne (communicate karne) ka tarika deti hai.
// Socho tumhara app kisi aur app ya server se data lena chahta hai – jaise weather ka data, user details, ya kisi product ka price  toh wo API ke through woh data maangta hai.

// {                            //JSON
//     "name": "nitin",         // in jason keys and value are both string
//     "coursename": "js in hindi",
//     "price": "free"
// }

[           // some time we get api in object inside array format
    {},
    {},
    {}
]

// randomuser.me for getting json 