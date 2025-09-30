// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false 
console.log(null == 0); // true, but not recommended to use
console.log(null >= 0); // true, but not recommended to use

console.log(undefined == 0); // false, undefined is not equal to 0
console.log(undefined > 0);  // false, undefined is not greater than 0
console.log(undefined < 0);  // false, undefined is not less than 0 

// === 

console.log("2"==2); // general check // general check checks value only and returns true if values are same, but not type
console.log("2" === 2); // strict checking // strict checking checks type and value and returns true only if both are same type and value