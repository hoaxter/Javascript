const name = "nitin"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string intercorellation using back ticks and place holders , better than above syntax

const gameName = new String('nitin') // another syntax for string using new keyword

// console.log(gameName[0]); // this is will give n 
// console.log(gameName.__proto__); // proto is used to check the prototype of the object

// console.log(gameName.length);   // will give the length
console.log(gameName.toUpperCase()); // will change the string to uppercase will not change the original string.
console.log(gameName)
console.log(gameName.charAt(2));  // character at a particular index
console.log(gameName.indexOf('t')); // index of a character first occurence.

const newString = gameName.substring(0, 4)  // we give start index here and end index where end no. is not included // if we give negative value in this it will change to 0 index
console.log(newString);

const anotherString = gameName.slice(-8, 4) // same as substring but we can also give negative value that will give reverse value but not as you though
console.log(anotherString);

const newStringOne = "   nitin    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it will trim left right spaces

const url = "https://nitin.com/nitin%20sikarwar"

console.log(url.replace('%20', '-')) // it will replace the character from the string

console.log(url.includes('sundar')) // checks whether its present in string or not
let gamename = "nit-in"
console.log(gamename.split('-'));   // split on the basis of given value // it returns array