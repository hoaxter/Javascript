const user = {
    username: "nitin",
    price: 999,

    welcomeMessage: function() {       // declaring a function in object
        console.log(`${this.username} , welcome to website`);  // to refer the current context we use this keyword
        console.log(this); // if we run this we will get the current context
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);  // if we run this it will give us our current context that is for node env {} means cause there is no context in global
// if we do this in browser than we got a global object that is window


// function chai(){
//     let username = "nitin" 
//     console.log(this.username); // we cant use this in function it will give undefined, but we can use it in a function that is defined inside a object
// }
// chai()

// const chai = function () {
//     let username = "nitin"
//     console.log(this.username); // it will give the same undefined
// }

const chai = () => {       // this is called arrow function which came in es6, function hata do arrow laga do parameters waise hi ayenge
    let username = "nitin"
    console.log(this); // it will give {} empty object
}
chai()

// const addTwo = (num1, num2) => {  // arrow function example
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // arrow function implicit return , here we dont have to write return keyword and it will return the last value num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // arrow function implicit return

const addTwo = (num1, num2) => ({username: "nitin"}) // returning a object using implicit return , we have to wrap the obj in {}

console.log(addTwo(3, 4))