class User {
    #password;               // private per instance
    static count = 0;        // shared for all instances

    constructor(password) {
        this.#password = password;
        User.count += 1;
    }

    revealPassword() {  
        return this.#password; // access private field
    }

    static getCount() {
        return User.count;    // access static field
    }
}

const u1 = new User("abc");
console.log(u1.revealPassword()); // abc
console.log(User.count); 
console.log(User.getCount());   
// console.log(u1.getCount)   // this give undefined
// console.log(u1.getCount());   // this will not work as static belongs to class

const u2 = new User("xyz");
console.log(u2.revealPassword()); // xyz
console.log(User.count);          // 2
console.log(User.getCount());     // 2

// console.log(u1.#password);     // Error: private field
// console.log(u1.count);         // undefined: static not on instance

// #private → belongs to  instance, cannot be accessed outside.
// static → belongs to class, shared among all instances.


// If we had defind the count as  static #count = 0; we won't able to access it like below 
// console.log(User.#count);  // SyntaxError: private static field cannot be accessed outside