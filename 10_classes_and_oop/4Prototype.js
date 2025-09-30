// here we have to make method for myName like true length that will only tell the length of the actual alphabet
// let myName = "nitin     "
// let mychannel = "sikarwar     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]   // its an array


let heroPower = {         // here we are creating a object 
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);  // this.spiderman = sling
    }
}

Object.prototype.nitin = function(){  // here we are giving a method to object its self that will be inherited by all like str, arr, obj...
    console.log(`nitin is present in all objects`);
}


Array.prototype.heynitin = function(){
    console.log(`nitin says hello`);
}

"nitin".nitin();
heroPower.nitin()
myHeros.nitin()
myHeros.heynitin()
// heroPower.heynitin() // heynitin() will not work here as it is for array

// inheritance
const User = {      //here we are creating object user // we used to create different objects before the classes in the javascript
    name: "hoax",
    email: "hoax@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // here we are inherting the TeachingSupport using __proto__ // pro
}

Teacher.__proto__ = User  // here the Teacher is inheriting the user object  // its a old school method tho
console.log(Teacher.name) //hoax will be output 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // now we use this modern syntax inhereting using this 

let anotherUsername = "hoaxlabs     "

String.prototype.trueLength = function(){  // we are creating a method for the first problem here
    console.log(`${this}`);  // this will so jiss ne call kiya wo // this = jisne
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()  // here "hoaxlabs   ".trueLength so 'hoaxlabs    ' will go in this
"nitin".trueLength()  // here nitin will go as this
"hoaxlabs".trueLength() 