// Getter SETTER using "_" notation
class User {
    constructor(email, password){
        // When a new User is created, these lines call the setters
        this.email = email;      // Calls set email(value)
        this.password = password; // Calls set password(value)
    }

    // Getter for 'email'
    get email() {         // get email directly call when somebody try to access email, it works without email() directly using email
        // When we access 'nitin.email', this runs
        // Returns the internal _email in uppercase
        return this._email.toUpperCase();
    }

    // Setter for 'email'
    set email(value) {
        // When we assign to 'nitin.email', this runs
        // Stores the value in a "private" property _email its just private for name its notation not truly private for that use #
        this._email = value;
    }

    // Getter for 'password'
    get password() {
        // When we access 'nitin.password', this runs
        // Returns the internal _password with 'nitin' appended
        return `${this._password}nitin`;
    }

    // Setter for 'password'
    set password(value) {
        // When we assign to 'nitin.password', this runs
        // Stores the value in a "private" property _password
        this._password = value;
    }
}

const nitin = new User("n@nitin.ai", "abc");

// Accessing the email triggers the getter
console.log(nitin.email); 

// Accessing the password triggers the getter
console.log(nitin.password); // Output: "abcnitin"

// Assigning a new email triggers the setter
nitin.email = "new@domain.com";
console.log(nitin.email); // Output: "NEW@DOMAIN.COM"

console.log(nitin._password);  // here see its not private the _private its just notation. 