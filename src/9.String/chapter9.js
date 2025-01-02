// Function to process the template literal
function tag(strings, ...values) {
    return strings.reduce((result, string, i) => `${result}${string}${values[i] || ''}`, '');
}

// Example usage
const name = 'John';
const age = 30;
const message = tag`Hello, ${name}! You are ${age} years old.`;
console.log(message); // "Hello, John! You are 30 years old."
