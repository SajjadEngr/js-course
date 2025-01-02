// Primitive Data Types

// Number
let age = 30; // Integer
let temperature = 98.6; // Floating-point number
console.log(`Age: ${age}, Temperature: ${temperature}`);

// String
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);

// Boolean
let isLoggedIn = true;
let hasPaid = false;
console.log(`Is Logged In: ${isLoggedIn}, Has Paid: ${hasPaid}`);

// Undefined
let notAssigned;
console.log(`Not Assigned: ${notAssigned}`);

// Null
let emptyValue = null;
console.log(`Empty Value: ${emptyValue}`);

// Symbol
let uniqueId = Symbol('id');
console.log(`Unique ID: ${uniqueId.toString()}`);

// BigInt
let largeNumber = BigInt(9007199254740991);
console.log(`Large Number: ${largeNumber}`);

// Complex Data Types

// Object
let user = {
    name: "Alice",
    age: 30,
    isLoggedIn: true
};
console.log(`User: ${JSON.stringify(user)}`);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(`Numbers: ${numbers}`);
