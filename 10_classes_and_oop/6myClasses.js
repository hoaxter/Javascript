// ES6 comes with classes

class User {  // Class is a keyword to create a class
    constructor(username, email, password){  // constructor is called when a class ek object intiliaze hoga
        this.username = username;  // we are giving the context to this
        this.email = email;
        this.password = password
    }

    encryptPassword(){    // we have made a method here same as function but inside the class we call them method and we create them without function keyword
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("nikki", "nikki@gmail.com", "123")  // creating a user using new keyword and giving contructor function data

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene without Classes <old school>

function Usser(username, email, password){  // creating a constructor function
    this.username = username;     // contexting to this
    this.email = email;
    this.password = password
}

Usser.prototype.encryptPassword = function(){  // creating a method using prototyp without using class.
    return `${this.password}abc`
}
Usser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new Usser("nitin", "nitin@gmail.com", "12s3") // creating a Usser object using a new

console.log(tea.encryptPassword());  
console.log(tea.changeUsername());