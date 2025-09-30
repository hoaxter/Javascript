// Constructor function to create User objects without Class
function User(email, password){
    // Internal properties to store actual values
    this._email = email;        // "_email" is just a naming convention for "private"
    this._password = password;  // "_password" is internal storage

    // Define a getter and setter for 'email' using Object.defineProperty
    Object.defineProperty(this, 'email', {
        // Getter runs when we access 'nitin.email'
        get: function(){
            // Returns the internal _email in uppercase
            return this._email.toUpperCase();
        },
        // Setter runs when we assign a value to 'nitin.email'
        set: function(value){
            // Updates the internal _email
            this._email = value;
        }
    });

    // Define a getter and setter for 'password' using Object.defineProperty
    Object.defineProperty(this, 'password', {
        // Getter runs when we access 'nitin.password'
        get: function(){
            // Returns the internal _password in uppercase
            return this._password.toUpperCase();
        },
        // Setter runs when we assign a value to 'nitin.password'
        set: function(value){
            // Updates the internal _password
            this._password = value;
        }
    });
}

// Create a new User instance
const nitin = new User("nitin@n.com", "neo");

// Accessing the 'email' property triggers the getter
console.log(nitin.email); // Output: "NITIN@N.COM"

// Accessing the 'password' property triggers the getter
console.log(nitin.password); // Output: "NEO"

// Updating 'email' triggers the setter
nitin.email = "newemail@n.com";
console.log(nitin.email); // Output: "NEWEMAIL@N.COM"

// Updating 'password' triggers the setter
nitin.password = "matrix";
console.log(nitin.password); // Output: "MATRIX"


// Explanation of Object.defineProperty
// Purpose: Allows you to define a property with custom behavior, such as getters and setters, instead of just storing a value.
// Getter (get): Runs automatically whenever the property is accessed.
// Setter (set): Runs automatically whenever a value is assigned to the property.

