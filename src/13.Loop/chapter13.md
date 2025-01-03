# 🎩✨ JavaScript Looping Magic ✨🎩

## Mastering `for`, `while`, `do...while`, `for...of`, and `for...in`

Hey there, code maestro! 🎻 Ready to take your JavaScript loops to the next level? Let's dive into the wonderful world of `for`, `while`, `do...while`, `for...of`, and `for...in` loops with some cool examples and tips along the way. Buckle up, it's going to be a fun ride! 🚀

## 🔄 `for` Loop

`for` loops are perfect when you know exactly how many times you want to repeat a block of code. Here's the structure:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration number " + i);
}
```

## ⏳ `while` Loop

A `while` loop keeps running as long as a specified condition is true. Check this out:

```javascript
let count = 0;

while (count < 5) {
    console.log("Count is " + count);
    count++;
}
```

n

## 🔁 `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it guarantees at least one execution of the block of code:

```javascript
let count = 0;

do {
    console.log("Count is " + count);
    count++;
} while (count < 5);
```

## 🌟 `for...of` Loop

The `for...of` loop is perfect for iterating over iterable objects like arrays. It's straightforward and elegant:

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}


```

## 🔍 `for...in` Loop

The `for...in` loop is used for iterating over the properties of an object. Here's a simple example:

```javascript
let person = { name: "Alice", age: 25, city: "Wonderland" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

## 🏁 Wrap-Up

Now you're ready to loop through your code with style using `for`, `while`, `do...while`, `for...of`, and `for...in`! Each loop has its own strengths, so choose the one that fits your needs best.

Happy looping! 🎉
