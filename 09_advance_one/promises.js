// Asynchronous programming is a programming paradigm that allows tasks to run independently of the main program flow, enabling non-blocking operations and improving performance, especially in I/O-bound tasks.

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It allows you to write cleaner, more manageable asynchronous code compared to traditional callback functions.
// Promises are used to handle asynchronous operations in JavaScript, such as fetching data from an API, reading files, or performing time-consuming computations.
// They provide a way to attach callbacks for success (.then) and failure (.catch) of the asynchronous operation.

// A Promise has 3 states:
//     pending initial state, not settled.
//     fulfilled operation, completed successfully.
//     rejected operation, failed

// Promise is used to avoid callback hell and make code more readable and maintainable.
// callback hell is a situation where multiple nested callbacks make the code hard to read and maintain. Promises help to flatten the structure of asynchronous code, making it more linear and easier to follow.
// We generally use promises when we have to do some async task like api request, db calls, file handling etc
// more simpler and reallife example of promise is ordering food online, when we order food we dont wait for the food to be prepared and delivered we do other work and when the food is delivered we get a notification (this is how promise works)
// Note: A Promise can be in one of three states: pending, fulfilled, or rejected. Once a Promise is fulfilled or rejected, it cannot change its state again.
// The .then() method is used to handle the fulfillment of a Promise, while the .catch() method is used to handle rejection (errors).
// The .finally() method is used to execute code after the Promise is settled, regardless of its outcome (fulfilled or rejected).

// 1. Promises
const promiseOne = new Promise(function(resolve, reject){ // promise creation and consumption are two main part of promise , the parameter here we give are resolve means the task is done, reject means the task wasn't dont cuase of some error
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task 1');
        resolve(); // this means task is completed and it will go to .then()
    }, 1000);
}); 

promiseOne.then(function() {  // .then() have a call back function inside
    console.log('Promise 1 Consumed/Resolved');
});

// 2. second way to define promises
new Promise(function(resolve, reject) { // without storing the promise in a variable
    setTimeout(() => {
      console.log('Async task 2');  
      resolve();
    }, 1000);   
}).then(function(){    // when we dont store it in variablw we put the then directly
    console.log('Async 2 resolved');
});

// 3. Resolve returning value to then as agrument
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'nitin', email: 'nitin@example.com'}) // we can even pass a value in the resoolve this value when the task is completed will go to the .then() as a agrument
    }, 1000)
})

promiseThree.then(function(user){  // taking resolve value as an argumet 
    console.log(user);
})

// 4. Catch
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error){
           resolve({username: 'nitin', password: '124'}) 
        } else {
            reject('Error: Something went wrong'); // reject will give error to the catch kyword as an argument
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(typeof user);
    console.log(user);
    return user.username;
})
.then((username) =>{  // the return of 'first then' will come as the argument of second
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {  // finally is a method that you can chain at the end of a Promise chain to execute code regardless of whether the Promise was fulfilled or rejected. It always executes
    console.log("The promise is resovled or rejected");
});

// Async Await  
// Async/Await is a syntactic sugar built on top of Promises, introduced in ES2017 (ES8). It provides a more readable and straightforward way to work with asynchronous code by allowing you to write asynchronous code that looks and behaves like synchronous code.
// The async keyword is used to declare an asynchronous function, which automatically returns a Promise. Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved or rejected.
// This makes it easier to read and understand the flow of asynchronous operations without the need for multiple .then() calls or nested callbacks.
// In simple words async is used to declare a function as asynchronous and await is used to wait for a Promise to resolve or reject inside an async function.

//5. Async await (we can use promise without .then by using async await),  a function is marked with async, it automatically returns a Promise, even if you don't explicitly return one.
// Instead of using .then(), we can use await to write async code that looks like synchronous code (cleaner and easier to read).

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => { // setTimeout is used to simulate an async task
        let error = true; // to make promise give error through reject
        if(!error) {
            resolve({username: "javascript", password: "321"});
        } else {
            reject('Error: Js went wrong');
        }
    }, 1000)
});

// we create a function through async not a call back function 
// this async function will return a promise itself.
async function consumePromise(){ // async wait for a while for the task to complete but it dont handle error gracefully like .catch
    // const response = await promiseFive; 
    // console.log(response); // if we use this directly it will give us error as async-await dont handle errors gracefully
    try {  // to handle error gracefully in async await we use try-catch block
        const response  = await promiseFive; // await is used inside an async function to pause execution until the Promise is resolved (or rejected).
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise(); // calling the async function
// Inside an async function, if you use await, the thing you're awaiting must be a Promise (or something that behaves like one).

// API-Request

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/hoaxter'); //fetch() is a built-in JavaScript function used to make HTTP requests — like getting data from a server (API).
        // By default, fetch() returns a Promise that resolves to a Response object.
        // const data = response.json(); // it will show Promise { <pending> } because we arent using await here the issue is that the json converstion also take some time thats why we need to use await
        const data = await response.json(); // response.json() is also a promise so we use await here
        console.log(data);
    } catch (error){
        console.log(error);
    }
}
getAllUsers();  // async
// note: this above async function output will be coming first then other code above cause its using fetch and fetch have a priority/fetch queue that is completed first.

// same api request as above using .then
fetch('https://api.github.com/users/hoaxter')
.then((response) => {
    // const resp = response.json(); // we cant do this as the response.json is a promise itself so its good to return it to the next .then 
    // console.log(`The .then response: ${resp}`); 
    return response.json();
})
.then((response) => {
    console.log(`The .then response: ${JSON.stringify(response, null, 2)}`); // JSON.stringify is used to convert a JavaScript object into a JSON string. The null and 2 arguments are used for formatting the output with indentation for better readability.
    // JSON.stringify(object, replacer, space) replacer is used to filter the properties of the object that you want to include in the JSON string. If you don't want to filter any properties, you can pass null. and space is used to add indentation and whitespace to the output JSON string for better readability. If you provide a number (like 2), it specifies the number of spaces to use for indentation.
    // console.log('The .then response: ', response); // we can also do this
})
.catch((error) => {
    console.log(`ERROR: ${error}`);
})

// explanation about why we return response.json to next .then 
// response.json() returns a Promise.
// When you do console.log(resp), you're logging the Promise object, not the actual data.
// The data hasn't been parsed yet — it's still being processed asynchronously.
// We return the response.json() Promise so that the next .then() can handle the actual data:


