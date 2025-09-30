var c = 300 //var have a behavior that it ignores block scope
let a = 300 // let and const are block scoped
console.log("OUTER: ", a, c)
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a, b, c);
    
}
console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "nitin"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // we will not be able to access website as it is not in this scope
    two()
}
one()

if (true) {
    const username = "nitin"
    if (username === "nitin") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // we will not be able to access website as it is not in this scope
}

// console.log(username); // we will not be able to access username as it is not in this scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // we can call the function like this before its declaration
function addone(num){
    return num + 1
}

//addTwo(5);  // but here we can't as we have declare the function using variable
const addTwo = function(num){  // variable can also hold function
    return num + 2
}
