const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // it give info (hidden info) about object property // Math is the module, Pi is the property (the key whose info we want)
console.log(descripter);
console.log(Math.PI);
Math.PI = 5  // we won't be able to overwrite the value of Math.PI
console.log(Math.PI);

const cool = {
    name: 'Coat',
    price: 150,
    isAvailable: true,

    foolguy: function(){
        console.log("cool guy is dead");
    }
}
console.log(Object.getOwnPropertyDescriptor(cool)); // it will give undefined as it is not the property its an object
console.log(Object.getOwnPropertyDescriptor(cool, "name")); // now we are definig the name of the property so will get info about it
console.log(Object.getOwnPropertyDescriptor(cool, "foolguy")); // accessing foolguy property

Object.defineProperty(cool, 'name', { // defineProperty will let us define the property ourselves // we selectin cool obj name property
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(cool, "name"));
cool.name = "nitin";  // checking if defineProperty working or not by overwriting the name
console.log(cool.name);  //  the name did not got overwrited , defineProperty is working

for (let [key, value] of Object.entries(cool)) { // we are tryna iterating the cool object but it will not iterate the name property and will iterate other property
    if (typeof value !== 'function') {   // here we are not iterating the function just for fun :) 
        console.log(`${key} : ${value}`);
    }
}   