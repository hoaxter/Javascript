
function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("N");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // default parameter
    if(!username){
        console.log("PLease enter a username");
        return   // early return is used to avoid nested if else    
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nitin"))
// console.log(loginUserMessage("nitin"))

// Rest Operator
function calculateCartPrice(val1, val2, ...num1){ // rest operator: we use it to take n no. of arguments, the things that will come under rest operator will be in array 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "nitin",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // anyobject.price will be unedefined as it is not in the object
}
handleObject(user)

handleObject({  // directly passing object
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));