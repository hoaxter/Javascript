
const user = { // object literal is the simplest way to create an object in JavaScript // same as object in js that we have studied before
    username: "nitin",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this); // it will print our current context
    }
}

// differnece between callback function and anonymous function
// callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
// anonymous function is a function that does not have a name and is often used as a callback function or assigned to a variable.

console.log(user.username);
console.log(user.getUserDetails());
console.log(this) //node env have empty current context but in browser env it will have lots of things
// In Node: {}, In browser: window object
// this inside getUserDetails() refers to the user object.
// this outside refers to global context:
// Node.js → {} (empty object)
// Browser → window object

// ----Constructor Function------------------------------------------
// Constructor functions allow creating multiple instances of an object with similar structure.
// eg: Date is a built-in constructor function in JavaScript

const data = new Date(); // this new keyword is constructor function // we use it to make a new instance, context
// new keyword creates a new empty object and sets 'this' to that object inside the constructor function.

function User(username, loginCount, isLoggedIn){ // it is a constructor function // by convention constructor function name starts with capital letter.
    // constructor function is a regular function but it is used with new keyword to create multiple instances of an object.
    // when we use new keyword, a new empty object is created and 'this' inside the function refers to that new object.
    // we can add properties and methods to 'this' to define the structure of the object.
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        // This attaches the method greeting to the object being created.
        // So every object instance created by new User(...) will have its own copy of greeting
        // defining like let greeting will not work and will throw error in constructor function
        console.log(`welcome ${this.username}`);
    }
    return this; // we are returning this of this current context User
    // even if we dont return 'this' as it is implicitly defined by default
}
// without using new
const userOne = User("nitin", 12, true); // here we are not using new keyword
console.log(userOne);  // this will be printing a lot of things as current context but just focus on last values.
const userTwo = User("ayush", 14, false); 
userOne.greeting();
console.log(userOne); // we are still printing the userOne but its value will have changed as the UserTwo have made changes in the User so thats why we use new keyword to create different instance that will not interfere with each other changes.
    // Issue: Without new, this refers to the global object.
    // Both userOne and userTwo modify the same global context.

console.log(userOne instanceof User); // instanceof checks if an object is an instance of a particular constructor or any of its prototypes in the prototype chain.
// the above line giving false as we are not using new keyword so it is not an instance of User constructor function

// with using new
const one = new User("nitin", 14, true);
const two = new User("ayush", 12, true);
console.log(one); // using new it will create a instance and give us the better result by hiding other not usable things
userOne.greeting();

console.log(two); 
userOne.greeting();

// // what happen when we use new keyword
// // 1. Creates a new empty object ({}).
// // 2. Calls the constructor function and sets 'this' to the new object.
// // 3. Adds properties to 'this'.
// // 4. Returns the object implicitly.
// // 5. This ensures each instance (one, two) is independent.
 
console.log(one.constructor); // it is the reference of it self // The .constructor property returns a reference to the constructor function that created the instance.
console.log(one instanceof User); // instanceof checks if an object is an instance of a particular constructor or any of its prototypes in the prototype chain.
