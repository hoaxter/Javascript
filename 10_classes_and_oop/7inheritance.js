class User {       // creating a class
    constructor(username){  // constructor that is just seeting this.username 
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{  // inherting the User class method and property using extends keyword
    constructor(username, email, password){  // consturctor function Of Teacher Class
        super(username) // using super it will take the this.username of the User consturctorcontext here, we dont have to use .call() as super is doing its work
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hss = new Teacher("nitin", "nitin@teacher.com", "123") // we have to use new here 
hss.logMe()

const ssh = new User("nikki")
ssh.logMe()

console.log(hss instanceof User);