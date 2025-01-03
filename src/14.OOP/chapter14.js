// Object Literals
let personLiteral = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

personLiteral.greet(); // Output: Hello, my name is John

// Object Constructors
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
}

let alice = new Person("Alice", 28);
alice.greet(); // Output: Hello, my name is Alice

// Classes in JavaScript
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let bob = new PersonClass("Bob", 35);
bob.greet(); // Output: Hello, my name is Bob

// Inheritance
class Employee extends PersonClass {
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

// Encapsulation
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

// Polymorphism
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

// Abstraction
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
