// let person = {}
let person = {
    name : "nitin",
    age: 100,
    favColor : "black"
}
Object.freeze(person); // we can freeze the person object so nobody can change it in console and not in the src code further
console.log(person.age);
console.log(person.favColor);
console.log(person.name);

person.name = "maverick"; // we can change the object property // it will not be working as we have used freeze so first comment that
console.log(person.name); 
person.isMale = true; // we can add a different property
delete person.favColor; // we can delete a property
console.log(person); 


let peson = {
    name : "nitin",
    age : 100,
    favColor : "black",
    greet : function(){ // this is a method, when we write a function inside a object
        console.log("hello");
    } // the nature and role of a function is to return something
      // when nothing is return from a function by default undefned is return
}