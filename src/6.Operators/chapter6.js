// Arithmetic Operators
let sum = 5 + 3;
let difference = 10 - 2;
let product = 4 * 2;
let quotient = 16 / 2;
let remainder = 10 % 3;

console.log(`Sum: ${sum}`); // Outputs: Sum: 8
console.log(`Difference: ${difference}`); // Outputs: Difference: 8
console.log(`Product: ${product}`); // Outputs: Product: 8
console.log(`Quotient: ${quotient}`); // Outputs: Quotient: 8
console.log(`Remainder: ${remainder}`); // Outputs: Remainder: 1

// Comparison Operators
let isEqual = (5 == 5);
let isNotEqual = (5 != 3);
let isStrictEqual = (5 === 5);
let isNotStrictEqual = (5 === "5");
let isGreater = (10 > 5);
let isLess = (5 < 10);

console.log(`Is Equal: ${isEqual}`); // Outputs: true
console.log(`Is Not Equal: ${isNotEqual}`); // Outputs: true
console.log(`Is Strict Equal: ${isStrictEqual}`); // Outputs: true
console.log(`Is Not Strict Equal: ${isNotStrictEqual}`); // Outputs: false
console.log(`Is Greater: ${isGreater}`); // Outputs: true
console.log(`Is Less: ${isLess}`); // Outputs: true

// Logical Operators
let isBothTrue = (5 > 3 && 10 < 15);
let isOneTrue = (5 > 10 || 10 < 15);
let isNotTrue = !(5 > 10);

console.log(`Is Both True: ${isBothTrue}`); // Outputs: true
console.log(`Is One True: ${isOneTrue}`); // Outputs: true
console.log(`Is Not True: ${isNotTrue}`); // Outputs: true

// Assignment Operators
let x = 5;
x += 3; // Equivalent to x = x + 3

console.log(`Value of x: ${x}`); // Outputs: 8
