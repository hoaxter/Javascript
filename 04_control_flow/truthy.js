const { compile } = require("ejs"); // its just for removing warning

// Truthy and Falsy values
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

const userEmail = [] // its a truthy value 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// we use it to handle null and undefined value that cause havoc in our code structure
let val1;    
// val1 = 5 ?? 10       // the value will be 5
// val1 = null ?? 10    // the value will be 10
// val1 = undefined ?? 15  // the value will be 15
val1 = null ?? 10 ?? 20   // the first value will be assinged other than null in this case 10
console.log(val1);


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")