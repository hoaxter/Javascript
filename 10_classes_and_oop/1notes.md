---ctrl + k + v  for markdown preview

# JavaScript and Classes`

JavaScript is a **prototype-based** language, meaning it achieves inheritance through prototypes rather than traditional class-based inheritance. However, ES6 introduced `class` syntax, which provides a cleaner and more familiar way to implement object-oriented programming (OOP) in JavaScript, while still relying on prototypes under the hood.

---

## Object-Oriented Programming (OOP)

OOP is a programming paradigm based on the concept of **objects**, which are data structures containing properties (data) and methods (functions).

---

## What is an Object?

An object is a collection of key-value pairs, where keys are property names and values can be data or functions (methods). In JavaScript, objects are a foundational structure used to represent real-world entities and abstract data.

Common examples of object methods include built-in ones like `.toLowerCase()`.

---

## Why Use OOP?

- **Organization**: Helps in structuring complex programs into reusable components.
- **Reusability**: Code can be reused through inheritance and object instantiation.
- **Encapsulation**: Keeps data safe and grouped with the functions that operate on it.
- **Scalability**: Makes large codebases easier to maintain and extend.
- **Abstraction**: Hides complex details and exposes only essential parts.

---

## Parts of OOP in JavaScript

### 1. Object Literals

Basic method to create objects using `{}` syntax. Good for simple, one-off structures.

### 2. Constructor Functions

Special functions used to create multiple instances of objects with similar structures and behaviors. Used before ES6 introduced `class` syntax.

### 3. Prototypes

JavaScript objects inherit from other objects via the prototype chain. When accessing a property or method, JavaScript looks up the prototype chain if it's not found directly on the object.

### 4. Classes (ES6)

Introduced in ES6, classes provide syntactic sugar over prototype-based inheritance. They allow developers to define constructor methods, static methods, and inheritance more intuitively.

### 5. Instances

Instances are individual objects created from classes or constructor functions using the `new` and `this` keyword. Each instance has access to the class's properties and methods.

---

## JavaScript is a Prototype-Based Language

Unlike class-based languages (e.g., Java or C++), JavaScript uses **prototype chains** to handle inheritance. Every object in JavaScript has an internal link to another object called its prototype. This prototype can also have a prototype, forming a chain that ends with `null`.

The `__proto__` property is an accessor to the object's prototype, while the `prototype` property is used on constructor functions to define shared properties and methods.

---

## The Four Pillars of OOP

### 1. Abstraction

Abstraction means exposing only the relevant data and hiding the complex internal details. It simplifies code usage and promotes cleaner interfaces.

### 2. Encapsulation

Encapsulation is the practice of keeping fields within a class private and providing controlled access through public methods. It protects the integrity of the data and reduces external dependency.

### 3. Inheritance

Inheritance allows a class or object to acquire properties and methods from another. In JavaScript, this is achieved using prototypes or the `extends` keyword in classes.

### 4. Polymorphism

Polymorphism allows objects of different types to be treated as instances of the same class through a common interface. In practice, it allows methods to behave differently based on the object that is calling them.

---

## Summary Table

| Feature              | Description                                         |
|----------------------|-----------------------------------------------------|
| Object               | Data + behavior (properties and methods)            |
| Constructor Function | Function used to create object instances            |
| Prototype            | Mechanism for inheritance in JavaScript             |
| Class                | ES6 syntax for defining objects and inheritance     |
| Instance             | An object created from a constructor or class       |
| `this`               | Refers to the current object instance               |
| `__proto__`          | Points to the object's prototype                    |
| `prototype`          | Defines methods and properties shared by instances  |

---

