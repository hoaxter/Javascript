let score = "nitin"

// console.log(typeof score);
// console.log(typeof(score)); // both work similarly

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "nitin"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // it will return true because it is not empty string

// 1 => true; 0 => false
// "" => false
// "nitin" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // it will convert number to string
// console.log(typeof stringNumber); // it will return string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "nitin"

let str3 = str1 + str2
// console.log(str3); // hello nitin
// console.log("1" + 2);     // 12 [prefer the below link]
// console.log(1 + "2");     // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // it will convert true to int as 1
// console.log(+"");   // it will convert false to int as 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // it will assing the same value in all variable , but this is not good for readibility

let gameCounter = 100
++gameCounter; // ++prefix incremental operator, it will increment the value by 1 and then assign it to gameCounter whereas postfix++ operator will assign the value first then increment it
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
