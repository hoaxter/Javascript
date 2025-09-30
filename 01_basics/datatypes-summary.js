//  Primitive // here we give copy of the datatype 

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// JS is dynamically typed above are the example of it.

//Symbols return a symbol , symbol works as even if you give same value but the return value will not be same keeping things unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId); // it will be false

// const bigNumber = 3456543576654356754n // we use n to make it a bigInt


 
// Reference (Non primitive)  // here we give direct reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "nitin",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // it will give symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ------------------------------------------------------

// STACK (PRIMITIVE) , HEAP (NON PRIMITIVE)
// Stack is used for primitive data types and Heap is used for non primitive data types
// Stack is used for storing primitive data types like number, string, boolean, null, undefined, symbol, bigint
// Heap is used for storing non primitive data types like object, array, function   
// Stack is used for storing the value directly and Heap is used for storing the reference of the value

// Example of Stack and Heap        

// Stack
let myyoutubename = 'nitin';
let anothername = myyoutubename;
anothername = "sikarwar";  // the change we did here will not refelect in myyoutubenname variable cause when we assinged it to anothername we used its copy
console.log(myyoutubename);
console.log(anothername);


// Heap
const user1 = {
    email: "nitin@gmail.com",
    upi: "nitin@ypl"
}

const user2 = user1;
user2.email = "sikarawr@gmail.com"; // the change we did here will be reflected in user1 as well as we used its referecnce 
console.log(user1.email)
console.log(user2.email)

