function multipleBy5(num){
    return num*5 // 
}

multipleBy5.power = 2 // adding property to function // we have declared a function and we can add property to it like object like . accessing property of object

console.log(multipleBy5(5));  // 25
console.log(multipleBy5.power); // 2 // accessing property of function cause function is also an object because all prototypal inheritance at top level is object
console.log(multipleBy5.prototype); // {} // every function have prototype property by default 

// prototype property is used to add properties and methods to a function that can be shared across all instances created by that function when used as a constructor with the new keyword.

function createUser(username, score){ // constructor function
    this.username = username  
    this.score = score
}

// we can even add methods to prototype and properties to prototype
createUser.prototype.increment = function(){ // adding method to prototype // this method will be shared across all instances of createUser
    this.score++
}
createUser.prototype.printMe = function(){ // adding method to prototype
    console.log(`price is ${this.score}`);
}

const colt = new createUser("colt", 25) // creating instance using new keyword
const glock = createUser("glock", 250) //  as we are not using new, not creating instance, this will be undefined

console.log(colt);
colt.printMe();  // we dont have to write colt.prototype.printMe() as it will understand automatically here
// glock.printMe(); // TypeError: Cannot read properties of undefined (reading 'printMe')  cause glock is undefined 
// this error because we haven't told our createuser function about the new method and properties we have added to prototype so for that we have to add new keyword which will create instance and link prototype to it so our new properties and methods will be accessible

// javascript also give consturctor using new keyword and can also give using class keyword
// // In JavaScript, the new keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

/*
Here's what happens behind the scenes when the new keyword is used:
- A new object is created: The new keyword initiates the creation of a new JavaScript object.
- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/

 