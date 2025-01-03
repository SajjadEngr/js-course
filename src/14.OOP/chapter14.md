# 🌟 JavaScript Object-Oriented Programming (OOP) Masterclass 🌟

Welcome, coding superstar! 🌟 Ready to master the art of Object-Oriented Programming (OOP) in JavaScript? Buckle up, because we're about to dive into the world of objects, classes, inheritance, and more with fun examples and practical tips! 🎢

## 🛠️ Introduction to OOP

Object-Oriented Programming is a paradigm that uses "objects" to represent data and methods. These objects can interact with each other to create complex and modular applications. The four main principles of OOP are:

1. **Encapsulation**: Bundling data and methods that operate on that data within a single unit (object).
2. **Abstraction**: Hiding complex implementation details and showing only the essential features.
3. **Inheritance**: Creating new classes based on existing ones to reuse and extend code.
4. **Polymorphism**: Defining methods in different ways for different classes.

## 🧱 Creating Objects

### Object Literals

Let's start with the basics: creating objects using literals.

```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is John
```

## 🏫 Classes in JavaScript

### Defining Classes

Classes are a blueprint for creating objects. ES6 introduced the `class` keyword.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let bob = new Person("Bob", 35);
bob.greet(); // Output: Hello, my name is Bob
```

## 🧬 Inheritance

### Extending Classes

Inheritance allows us to create a new class based on an existing class.

```javascript
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(this.name + " is working as a " + this.jobTitle);
    }
}

let charlie = new Employee("Charlie", 40, "Developer");
charlie.greet(); // Output: Hello, my name is Charlie
charlie.work();  // Output: Charlie is working as a Developer
```

## ⚙️ Encapsulation

### Private Properties and Methods

JavaScript uses `#` to denote private fields and methods.

```javascript
class BankAccount {
    #balance = 0;

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(this.accountHolder + " deposited " + amount);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount("Dana");
account.deposit(100); // Output: Dana deposited 100
console.log(account.getBalance()); // Output: 100
```

## 🌀 Polymorphism

### Overriding Methods

Polymorphism allows methods to do different things based on the object it is acting upon.

```javascript
class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks");
    }
}

let genericAnimal = new Animal();
genericAnimal.speak(); // Output: The animal makes a sound

let dog = new Dog();
dog.speak(); // Output: The dog barks
```

## 💡 Abstraction

### Abstract Classes

JavaScript doesn't have built-in support for abstract classes, but we can simulate it using ES6 syntax.

```javascript
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new TypeError("Cannot construct Shape instances directly");
        }
    }

    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

let circle = new Circle();
circle.draw(); // Output: Drawing a circle
```

## 🏁 Wrap-Up

Congratulations, you coding rockstar! 🎸 You've now mastered the fundamentals of Object-Oriented Programming in JavaScript. Remember, practice makes perfect, so keep experimenting with these concepts and soon you'll be creating robust, reusable, and maintainable code like a pro.

Happy coding! 🚀
