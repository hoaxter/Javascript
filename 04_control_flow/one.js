// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); 
// }

// console.log(`User power: ${power}`); 


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // one liner code, not preferable as less readable

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  // if first is false than in and it will not check others
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  // if first is true than in and it will not check others
    console.log("User logged in");
}