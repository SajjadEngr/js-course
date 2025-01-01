## Chapter 3: The Art of Commenting in JavaScript 📝

### What Are Comments?
Comments are pieces of text in your code that are ignored by the JavaScript engine. They are meant for humans to read and understand what the code does. Think of them as little notes or explanations that you leave for yourself or other developers.

### Why Use Comments?
- **Clarity:** Explain complex logic or purpose of code.
- **Maintenance:** Make it easier to update or debug code.
- **Collaboration:** Help others understand your code.
- **Documentation:** Provide information about what specific functions, classes, or sections of code do.

### Types of Comments in JavaScript
1. **Single-Line Comments:**
   - Use `//` to start a single-line comment.
   - Example:

     ```javascript
     // This is a single-line comment
     let greeting = "Hello, World!";
     ```

2. **Multi-Line Comments:**
   - Use `/* ... */` to start and end a multi-line comment.
   - Example:

     ```javascript
     /*
       This is a multi-line comment.
       It can span multiple lines.
     */
     let greeting = "Hello, World!";
     ```

### Best Practices for Commenting
- **Be Concise:** Comments should be short and to the point.
- **Stay Relevant:** Only comment on complex or non-obvious parts of the code.
- **Avoid Redundancy:** Don't comment on things that are self-explanatory.
- **Use Comments to Explain Why:** Focus on why certain decisions were made, rather than how the code works.

### Examples of Good Comments

```javascript
// Calculate the area of a circle with the given radius
function calculateArea(radius) {
    const pi = 3.14159; // Pi constant
    return pi * radius * radius; // Formula for area of a circle
}

/*
  This function fetches data from the provided API endpoint.
  It uses async/await to handle the asynchronous call.
*/
async function fetchData(apiEndpoint) {
    try {
        let response = await fetch(apiEndpoint); // Fetch data from API
        let data = await response.json(); // Parse JSON data
        return data; // Return the parsed data
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
}
```
