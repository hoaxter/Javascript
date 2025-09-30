// JavaScript provides three methods for manipulating the this keyword in functions: call(), apply(), and bind(). 
// These methods allow you to change the context of the this keyword, which can be useful for controlling the behaviour of functions.

// Basic Execution Context  -> In this if we access window = it will give {this.window} , node = {} node env will return blank obj
// setUsername() so when this will be called without using .call() its whole execution context will remove so its this will be gone too thats the reason we will not see the username in the when we print sm
// createUser() which calls -> setUsername()   // here when we use .call() we give createUser context (this) to setUsername so the context of setUsername will not be lost. 
// Global Executon Context  

function SetUsername(username){   // we created this function to outsourced the this.username for createUser
    //complex DB calls
    this.username = username
    console.log(username)
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username);  // we could have used this.username = username here but we created a fucntion for that cause we wanted to understand the .call()
    SetUsername.call(this, username)  // The call() method allows you to call a function with a specified this value and arguments provided individually. so here we are giving the this the createuser so even after the execution of SetUsername its this context will not be lost
    this.email = email
    this.password = password
}

const sm = new createUser("nitin", "nitin@.com", "123")
console.log(sm); // it should print the obj containing username, email, password

// call eg: 
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`); // here we have manipulated the this value and set it to the this of person. 
}
let person = {
  name: "John"   
};
greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.

// apply()
// The apply() method is similar to the call() method, but it takes an array of arguments instead of individual arguments. 
// The first argument to apply() sets the this value for the function being called, and the second argument is an array of arguments to pass to the function


function add(a, b, name) {
    this.name = name;
    console.log(name);
    return a + b;  
}

function nss(name){
    console.log(add.apply(this,[1,2, name])); // Output: 3
}
console.log(new nss('nitin'));


// Both call() and apply() immediately invoke the function instead of returning a new one.
    // call(thisArg, arg1, arg2, ...) → Calls the function right away with this set to thisArg, and arguments passed individually.
    // apply(thisArg, [argsArray]) → Same as call, but arguments are passed as an array.