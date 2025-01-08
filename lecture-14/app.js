// nomenclature of Variables
// 1. Should X Number start
// 2. Special Character allowed => _ , $
// 3. a-z, A-Z, 0-9
// 4. reserved keyword can't be used
// 5. starts with special character only -> _, $
// Browser Engine => Layout Engine, Javascript Engine

// numbers

let a = 10;
let b = 10.15;
let c = +Infinity; // for infinite value
let d = -Infinity;
console.log(a)
console.log(a,b,c,d) // when we print comma seprated statement they will print in single line
console.log(typeof(a)); // when we need to check the type of datatype
console.log(typeof(b)); 
console.log(typeof(c));
console.log(typeof(d));

// Strings:  strings can be defined through 3 ways
// 3 ways -> '',``,"",

let a1 = 'nitin';
let b1 = "sikarwar";
let c1 = `nikki`;
console.log(a1, b1, c1);
console.log(typeof(a1), typeof(b1), typeof(c1));

let naam = "samarth";
let kaam = "time pass";
let state = "new delhi";

// concatination

let out = 'hi  i am ' + naam + ` my job is to do ` + kaam + " and i put up in " + state; // worst way of doing concatination
console.log(out);

// -> string template literals
let out2 = `hi  i am ${naam} my job is to do ${kaam} and i put up in ${state}`;
console.log(out2);

// + , - , * , / , % , **
let a2 = 5;
let b2 = 2;
console.log(a2/b2); // it will give 2.5 as its datatype is number
console.log(a2%b2); 

// PEMDAS IS used in JS instead of BODMAS
