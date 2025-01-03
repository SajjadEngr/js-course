let number = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let guess = prompt("Guess the number between 1 and 10:");

if (guess == number) {
    console.log("Congratulations! You guessed it right! 🎉");
} else if (guess > number) {
    console.log("Your guess is too high! ❌");
} else {
    console.log("Your guess is too low! ❌");
}

let age = prompt("Please enter your age:");

if (age >= 18) {
    console.log("You are allowed to enter the site! ✅");
} else {
    console.log("Sorry, you must be at least 18 years old. 🚫");
}

let score = prompt("Enter the student's score:");

if (score >= 90) {
    console.log("Excellent! Your grade is: A 🏅");
} else if (score >= 80) {
    console.log("Very Good! Your grade is: B 👍");
} else if (score >= 70) {
    console.log("Good! Your grade is: C ✔️");
} else if (score >= 60) {
    console.log("Passable! Your grade is: D 🔍");
} else {
    console.log("Failed! Your grade is: F ❌");
}


let day = prompt("Enter the day of the week (e.g., Monday, Tuesday, ...):");

switch (day) {
    case "Monday":
        console.log("Start of the week! Go to the gym 🏋️‍♀️");
        break;
    case "Wednesday":
        console.log("Midweek! Watch a good movie 🎥");
        break;
    case "Friday":
        console.log("End of the week! Hang out with friends 🍻");
        break;
    case "Sunday":
        console.log("Rest day! Read a book or relax 📚");
        break;
    default:
        console.log("Just a regular day! Do whatever you like 😃");
}
