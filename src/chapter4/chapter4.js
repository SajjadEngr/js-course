// Declaring a variable using let
let age = 25;
console.log(`Initial age: ${age}`); // Outputs: Initial age: 25

// Reassigning a new value to the variable
age = 26;
console.log(`Updated age: ${age}`); // Outputs: Updated age: 26

// Declaring a constant variable using const
const birthYear = 1995;
console.log(`Birth year: ${birthYear}`); // Outputs: Birth year: 1995

// Declaring a variable using var
var name = "John Doe";
console.log(`Name: ${name}`); // Outputs: Name: John Doe

// Example with descriptive variable names
let userFirstName = "Alice";
let userLastName = "Johnson";
let userGreeting = `Hello, ${userFirstName} ${userLastName}!`;
console.log(userGreeting); // Outputs: Hello, Alice Johnson!

// Example of using a function to perform a calculation
function calculateSum(a, b) {
    return a + b;
}

let num1 = 10;
let num2 = 5;
let sum = calculateSum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}.`); // Outputs: The sum of 10 and 5 is 15.
