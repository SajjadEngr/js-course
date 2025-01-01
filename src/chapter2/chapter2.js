// Chapter 2: Jumping into JavaScript Basics

// Section: Declaring Variables and Constants
let age = 25; // Variable
const birthYear = 2000; // Constant
var name = "John Doe"; // Older way of declaring variables

// Section: Data Types and Operations
let number = 42; // Number
let message = "Hello, World!"; // String
let isLearning = true; // Boolean

// String Manipulation
let greeting = "Hi";
let fullGreeting = `${greeting}, welcome to the JavaScript world!`;
console.log(fullGreeting); // Outputs: Hi, welcome to the JavaScript world!

// Type Conversion
let strNumber = "123";
let convertedNumber = Number(strNumber); // Converts string to number
console.log(convertedNumber); // Outputs: 123

// Section: Functions
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Outputs: 15

// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 3)); // Outputs: 12

// Section: Control Flow
let weather = "sunny";
if (weather === "sunny") {
    console.log("Wear sunglasses!");
} else if (weather === "rainy") {
    console.log("Take an umbrella!");
} else {
    console.log("Have a nice day!");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// Section: Arrays and Objects
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Outputs: apple

let person = {
    name: "Jane",
    age: 30
};
console.log(person.name); // Outputs: Jane

// Array Methods
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]

// Section: Debugging and Error Handling
try {
    let result = add("5", 10);
    if (isNaN(result)) {
        throw new Error("Invalid operation");
    }
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
