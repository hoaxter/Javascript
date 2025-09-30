// Array specific loop

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps (datatype)- is iterable and used to store key value pairs it is different from objects because in objects key is always string or symbol but in maps key can be of any datatype
// The Map object holds key-value pairs and remembers the orginal insertion order of the keys. all unique values no duplicate, same key cannot be used twice
// any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()  // declaring a map
map.set('IN', "India") // stating key and value IN is key and India is value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set(true, "Boolean value") // key can be of any datatype
map.set('IN', "India")  // no duplicate so it will not take it

console.log(map);

// iterating map
for (const [key, value] of map) {  // [key, value] for getting key value by destructuring
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    1: 'Pacman' // this will be converted to string '1'
    // game1: 'Nsd' // no duplicate key so it will throw error
}

// for (const [key, value] of myObject) {  // it will show that the object is not iteratable we have different method to iterate objects
//     console.log(key, ':-', value);
    
// }

for (const key in myObject){ // for object we have to write like iteration in array but only thing that change is using `in` instead `of` 
    console.log(`${key}`);   // why does 1 get printed first because in object if key is number it will be converted to string so it will come first in order
}