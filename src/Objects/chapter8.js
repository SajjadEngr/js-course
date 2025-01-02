// Creating an object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function () {
        console.log("Hello, " + this.firstName);
    }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Calling a method of the object
person.greet(); // Output: Hello, John
