// array is a object 
// it is a datatype of javascript which can contain multiple data type and are resizeable
// when we do copy operation in array it creats a shallow copy
// shallow copy of an object is a copy whose properties share the same references (changes done in copied array will also refelect in orginal array too) 
// deep copy do not share the same references

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // array creation using new keyword
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add the value at last
// myArr.push(7) 
// myArr.pop() // remove the last value of array

// myArr.unshift(9) // will be insert at the start of array
// myArr.shift()    // will remove the first value of array


// console.log(myArr.includes(9)); // it is include it check whether the value is included or not, the datatype of return will be boolean
// console.log(myArr.indexOf(3)); // if the value is not present it will return -1

const newArr = myArr.join() // give array in string format

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // original array will remain same  

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // original array will change, the value from [1,2,3] will be stored in myn2 and myArr will be [0,4,5]
console.log("C ", myArr);
console.log(myn2);







