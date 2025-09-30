// Define a User object with internal properties and getters/setters
const User = {
    _email: 'h@hc.com',   // internal property to store the email
    _password: "abc",     // internal property to store the password

    // Getter for 'email'
    get email() {
        // When 'email' is accessed, return the internal _email in uppercase
        return this._email.toUpperCase();
    },

    // Setter for 'email'
    set email(value) {
        // When 'email' is assigned, update the internal _email
        this._email = value;
    }
}

// Create a new object 'nitin' that inherits from 'User'
const nitin = Object.create(User); // Using object factory method
// nitin does NOT have its own _email or _password yet,
// but it inherits them through the prototype chain from User

// Accessing nitin.email triggers the getter
console.log(nitin.email); 
// Output: "H@HC.COM"
// Explanation:
// 1. JS looks for 'email' on nitin. Not found, checks prototype (User).
// 2. Finds the getter in User, runs it with 'this' pointing to nitin.
// 3. nitin does NOT have its own _email, so 'this._email' resolves to User._email.
// 4. Returns "h@hc.com".toUpperCase() → "H@HC.COM"

// Assigning a new email to nitin triggers the setter
nitin.email = "new@nitin.com";
console.log(nitin.email);       // "NEW@NITIN.COM"
console.log(User._email);       // Still "h@hc.com"
// Explanation:
// - nitin now has its own _email property, which shadows the one from User


