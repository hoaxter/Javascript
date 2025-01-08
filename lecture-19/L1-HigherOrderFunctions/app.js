// There are two cases of higherorder function.

// case 1 
// when you have two functions function A and function B , assume that function B is sent as an argument to the other function (A) then we say that the accepting function is your higher order function.

function a(x,y) {
    console.log("hi");
    y();
}

// A callback function (B) is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function b(){      // b is a callback function
    console.log("hello");
}
a(10, b);

// case 2 
// when i have a outer function and inside that function i have another function (inner) and i am returning the inner function then the outer function is known as higher order function.

function outer(){   
    let a = 10;
    let b = "nitin";
    return function inner(){   // instead of doing returning like this we can define function here then return inner in the last line like general way.
        console.log(b);
    }
    // return inner 
}
