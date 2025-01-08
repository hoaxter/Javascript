// Array => collection of dissimilar (hetrogenous) type of data in JS, DataStructre+Ordered
let arr = ["nitin", 1, 2.4, 'c', [["nit", "in"], "ti"], true];
console.log(arr);
console.log(arr[4]);
console.log(arr[4][0]);
console.log(arr[4][0][1]);

// Object => Collection of properties (where properties are key:value pair) 
// objects are unordered which means it is not necessary that in the same ordered we saved the properties will be in that order
let obj = {
    name: "nitin",
    age: 90,
    favColor: "Grey",
    isMale: true
}
// keys behind the secenes stored as strings
console.log(obj);
console.log(obj["age"]); // object save its key in string format that why we have taken string here 
console.log(obj.age); // another way of accessing the data
console.log(obj.favColor);