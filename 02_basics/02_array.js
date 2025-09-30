const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // this will give the array as element in the array not combine it

// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // this will concat/combine both array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this will also concat the both array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it will make it 1-D array
console.log(real_another_array); 



console.log(Array.isArray("nitin")) // it will check if its array
console.log(Array.from("nitin")) // it will convert into array, we can give strings, objects etc.
console.log(Array.from({name: "nitin"})) // this will not convert it and will give a {} as we have to tell its what to convert in array the key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it will convert all values into array