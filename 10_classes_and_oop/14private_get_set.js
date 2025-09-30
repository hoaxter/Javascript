class User {
    #email;   // private field
    #password; // private field

    constructor(email, password) {
        this.#email = email;
        this.#password = password;
    }

    getEmail() {
        return this.#email.toUpperCase(); // can access private inside class
    }

    setEmail(value) {
        this.#email = value; // can modify private inside class
    }

    getPassword() {
        return this.#password.toUpperCase();
    }

    setPassword(value) {
        this.#password = value;
    }
}

const nitin = new User("nitn@ni", "abc");

console.log(nitin.getEmail()); // H@HITESH.AI
nitin.setPassword('nitinsikarwar');
console.log(nitin.getPassword());
// console.log(hitesh.#email); // SyntaxError! Cannot access private field outside
