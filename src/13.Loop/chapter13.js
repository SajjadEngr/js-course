let fruits1 = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}

let userInput1;

while (userInput1 !== "stop") {
    userInput1 = prompt("Type 'stop' to end the loop:");
    console.log("You typed: " + userInput1);
}


let userInput2;

do {
    userInput2 = prompt("Type 'stop' to end the loop:");
    console.log("You typed: " + userInput2);
} while (userInput2 !== "stop");


let word = "hello";

for (let letter of word) {
    console.log(letter);
}

let fruits2 = ["apple", "banana", "cherry"];

for (let index in fruits2) {
    console.log(index + ": " + fruits2[index]);
}
