// hoisting: means whenever you try to access a variable or a functin even before its declaration it is called hoisting.

// Hoisting is of two types -> 1.Genral => for var, 2.Dead Temporal Zone(DTZ) => for let and const

// Example  for var (General)

console.log(a); // we are accessing the variable before it is declarerd 
var a = 100;
console.log(a); // accessing variable after its declartion

sam(); // accessing the function before its declartion.

function sam(){
    console.log("I am sam fn");
}

sam();

// Example for let (DTZ)

console.log(b);let b = 100;      // it is aware of the b variable but cant access it before initializtion which will be shown as <value unavailable> in window // comment this line out you will get an error b is not defined
console.log(b);

