// Dates are defined from January 1, 1970 UTC (the epoch)
// Date is a object

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // create a new date // months start from 0 to 11
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// let myCreatedDate = new Date("2023-01-14") // create a new date by specifying format y-m-d
let myCreatedDate = new Date("01-14-2023") // create a new date by specifying format m-d-y
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // it will give the millisecond value frm 1970 to now data

// console.log(myTimeStamp); // will print timestamp
// console.log(myCreatedDate.getTime()); // we will get time in millisecond from date 
// console.log(Math.floor(Date.now()/1000)); // converting in seconds

let newDate = new Date() // creating a date object
console.log(newDate);
console.log(newDate.getMonth() + 1); // will give me the month
console.log(newDate.getDay()); // will give me the day

// `${newDate.getDay()} and the time ` // will give me the day and time

newDate.toLocaleString('default', {
    weekday: "long",
    
})
// we can changet the format by changing data type of different properties