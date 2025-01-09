// ArrayMethods -> foreach, map, filter, reduce, sort, every, some

// forEach is a higher oreder function and method of an array
// accepts a call back function which has two arguments one is item and the other is index
// Can't work on boolea, string, etc
// forEach does not return, it is only to manipulate the array if use return it will return undefined

let arr = [1,3,4,5,6];
let ret = arr.forEach(function(item,index){
    console.log(item*item);
    return item*item; 
});
console.log(ret);


// Map is a higher function and method of an array
// We can return from method and it return a new array
// Map accepts call back function where it take two arguments item, index

ret = arr.map(function(item, index){
    return item+index;
});
console.log("Map return value",ret);


// Filter is a array method , which accepts a callback function in that function it have two args 
// Filter also return the new array
// It returns true elements (some condition will be applied and if that condition is fulfiled then those element will be return)

arr = [10,20,25,35,50];
ret = arr.filter(function(item, index){
    if(item%10==0){
        return item;
    }
});
console.log(ret);

//Q1. 

arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.map(function(item,index){
    return item*2;
});

ret = arr1.filter(function(item, index){
    if(item>=10){
        return item;
    }
});
console.log(ret);

// same question with chaining without creating new variable arr1

arr = [1, 2, 3, 4, 5, 6];
ret = arr.map(function(item,index){
    return item*2;
}).filter(function(item, index){
    if(item>=10){
        return item;
    }
});
console.log(ret);


// IMP (Constructor Function)
// --> whenever you call a function with the new keyword in front of it then that function is not just a general function it is known as constructor function.
// --> The role of the constructor fucntion is to create object 
// --> Generally in order to distinguish between a normal function and constructor function we start the constructor function with the capital letter (not compulsory just convention)

function Nitin(){

};
console.log(Nitin()); // general function
console.log(new Nitin()); // consturctor function