// Immediately Invoked Function Expressions (IIFE)
// These are functions that are executed right after they are defined.

// They are often used to create a new scope and avoid polluting the global namespace. 
// global pollution means adding variables or functions to the global scope, which can lead to conflicts and bugs in larger codebases.
// By using an IIFE, we can encapsulate our code and prevent it from interfering with other code in the same scope.
// They save memory because they are not stored in a variable and are executed only once and execute fastly than normal functions.

// They can be named or unnamed (anonymous). eg:
// (function(){ /* code */ })(); // unnamed IIFE
// (function name(){ /* code */ })(); // named IIFE
// They can also accept arguments.

// iife function structure is we wrap the function in (function(){})(); and invoke it just after it 
// for arrow function : (() => {}();)

(function chai(){ // anonymouse iife function
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // we use iife to protect from global pollution and we use it immediately invoke it just after function
// we use ; to seprate two or more iife function

( (name) => {  // unnamed iife // anonymous arrow iife function
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // we can also give it a argument



//-------------------------------------------------------NOTE-------------------------------------------------------
// callback function
// setTimeout( () => { // this is a callback function
//     console.log(`Timer done`);
// }, 1000);
// // call back function is a function that is passed as an argument to another function and is executed after some operation is completed.
// // here setTimeout is a function that takes a callback function as an argument and executes it after 1000 milliseconds.

