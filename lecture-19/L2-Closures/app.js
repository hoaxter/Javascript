// Whenever we return a function it is never return alone it is always returned with its depended lexical environment. 
function a() {
    var ex = 10;
    var ex2 = 100;
    
    function b(){
        console.log(ex2);
    }
    return b;
}

let returnedVal = a();
console.log(returnedVal);
returnedVal();


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures   (mdn reference of closures)