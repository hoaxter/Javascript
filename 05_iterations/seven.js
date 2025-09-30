// Map function is also a method of array and it creates a new array populated with the results of calling a provided function on every element in the calling array
// its same as foreach but the difference is foreach does not return anything but map return a new array
// map also takes a callback function as foreach
// It creates a new array by applying a callback function to each element.
// It does not modify the original array.
// It is different from Map object in JavaScript, which is a collection of key-value pairs.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10}) // we can use map for iteration 
console.log(newNums)

const new1  = myNumers.forEach((itm) => {console.log(`${itm+10}`)});
console.log(new1);  // same thing as above using foreach and yeah it does not return anything so we have to print and will get undefined in last as it does not return anything

// Chaining 

// const newNums1 = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
// the above syntax of chaining means using multiple method first method will be done is map num*10 then its value will have num+1 and so on, moving left right

const newNums1 = myNumers  // same as above just more readable
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums1);