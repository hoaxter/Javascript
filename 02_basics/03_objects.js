// singleton : if a object bne constructor se  eg; object.create
// literal object: agr object bne literal se 

// object literals

const mySym = Symbol("key1") // declaring symbol


const JsUser = {  // literal object
    name: "nitin",
    "full name": "nitin sikarwar",
    [mySym]: "mykey1", // this is how we write symbol in obj
    age: 18,
    location: "Jaipur",
    email: "nitin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)      // we can access obj value using this
// console.log(JsUser["email"])   // we can access obj value using this too
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym])     // this is how we access a symbol

JsUser.email = "nitin@chatgpt.com"  // changing the value
// Object.freeze(JsUser)            // by using this we can lock so no one can change the object value
JsUser.email = "nitin@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){     // adding a new key and value of a function type
    console.log("Hello JS user");  
}

// console.log(JsUser.greeting)   // IT will give [Function (anonymous)] means it's just the reference of a function 

JsUser.greetingTwo = function(){    
    console.log(`Hello JS user, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());