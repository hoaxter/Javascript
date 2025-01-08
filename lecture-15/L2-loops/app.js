// Loops => for, while, do-while

// for loop
for(let i = 0; i<=10; i++){
    console.log(i);
}

// while loop
let i = 0;
while(i<=100){
    console.log(i);
    i++;
}

// do-while
let j = -1;
do {
    console.log(j);
    j++;
} while (j<=100);

// for-in vs for-of
// array is iterable | object is not iterable
// for-in is used for non-iterale like object
// for-of is used for iteratable like array

let arr = [10,20,30,40,50];

for (let i of arr){
    console.log(i);
}

let obj = {
    a : 10,
    b : 20,
    c : 30
}
for (let i in obj){
    console.log(i);
    // console.log(obj.item)   // this is not allowed as it will be finding item key instead of the value its hold
    console.log(obj[i]); // we will be using this one
}