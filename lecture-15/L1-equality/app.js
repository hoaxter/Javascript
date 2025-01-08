10 == 10;

let a = 10;
console.log(a == "10"); // general equality
console.log(a === "10"); // strict equality also check datatype

let b = 1 == true; 
console.log(b);

let c = 10 == "10";
console.log(c)
c = 10 === "10"
console.log(c)

// Conditional Statements
if(false){
    console.log("I am God"); // if statement is standalone condition rest all are dependent condition
}

if(true){
    console.log("I am nitin");
}
else if(false){
    console.log("I am luke skywalker");
}
else {
    console.log("I am not nitin");
}

// input 
// let age = prompt("Enter your age");
// console.log(`Your age is ${age}`);

// if (age<18){
//     console.log("No Entry");
// }
// else if(age>=18 && age<=25){
//     console.log("oh mr.stress");
// }
// else if(age>25){
//     console.log("oh old man");
// }

// Short Circuiting
let marks = 80; //33
// let attendance = 60; //75
if(marks>=33 || attendance>=75){ // in OR it will give the result if the first cond. is true and will not check 2 cond. even if the variable in 2 cond. dont exist. In AND if the first cond. is false it will decide the outcome and will not check 2 cond.
    console.log("Passed");
}
else{
    console.log("not passed");
}