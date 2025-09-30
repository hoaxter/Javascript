// Static: Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){    // static will not let the it be accessible.
        return `123`
    }
}

const nitin = new User("nitin")
// console.log(nitin.createId())  // we wont be able to access cause of static

class Teacher extends User {
    constructor(username, email){
        super(username)  // will use the constructor of User
        this.email = email 
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());
// console.log(iphone.createId()); // it will not work cause of static even inheriting classes wont be able to access it.