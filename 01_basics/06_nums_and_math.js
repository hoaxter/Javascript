const score = 400
// console.log(score);

const balance = new Number(100) // we can create a number using new 
// console.log(balance);

// console.log(balance.toString().length); // to change into string and find length
// console.log(balance.toFixed(1)); // it will give value after decimal like 100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // we can use precision to use it will take presicion on the first 4 value including left and right of decimal and it returns answer in string

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // it will give string in this format 10,000,00

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Number.MAX_VALUE); // it will give max value of number
console.log(Number.MIN_VALUE); // it will give min value of number
console.log(Number.POSITIVE_INFINITY); // it will give positive infinity
console.log(Number.NEGATIVE_INFINITY); // it will give negative infinity
console.log(Number.MAX_SAFE_INTEGER); // it will give max safe integer // difference between max value and max safe integer is that max value is the max value of number in javascript but max safe integer is the max value that can be used in javascript without losing precision
console.log(Number.MIN_SAFE_INTEGER); // it will give min safe integer // difference between min value and min safe integer is that min value is the min value of number in javascript but min safe integer is the min value that can be used in javascript without losing precision

console.log(Math);
console.log(Math.abs(-4)); // change negative value into positive
console.log(Math.round(4.6)); // for roundoff
console.log(Math.ceil(4.2)); // top number
console.log(Math.floor(4.9)); // below number
console.log(Math.min(4, 3, 6, 8)); // min of all
console.log(Math.max(4, 3, 6, 8)); // max of all

console.log(Math.random()); // value between 0 to 1
console.log((Math.random()*10) + 1); // multiply by 10 will make value from 0 to 9 and adding 1 makes it 1 to 10 
console.log(Math.floor(Math.random()*10) + 1); // it give floor value without decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula of min and max value