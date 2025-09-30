const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => { // storing the value of array
    console.log(item); 
    // the above line will print the value but below line will not store any value in values variable because foreach does not return anything 
    return item  // foreach does not return anything it will be undefined even if we write the return keyword
} )
console.log(values);  

// Filter // it is also a method of array and it creates a new array with all elements that pass the test implemented by the provided function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {   // filter take a callback function and a condition if value fulfil its condition they will be returned
    return num > 4   // filter return us value that will be stored in newNums
} )
// const newNums = myNums.filter( (num) => num > 4) // we can also write like this using implicit return 

// Doing filteration using Foreach

// const newNums = []  // we create a new array
// myNums.forEach( (num) => {   // we give a call back function
//     if (num > 4) {   // a condition
//         newNums.push(num)  // pushing the filtered value into the new array
//     }
// } )
// console.log(newNums);


const books = [  // a array containing objects
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')  // using filter on the array containing objects

userBooks = books.filter( (bk) => {  // using filter on the array containing objects
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);