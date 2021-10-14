
// ### larger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

const firstNumber = Math.floor(Math.random()*1000);
const secondNumber = Math.floor(Math.random()*1000);

if(firstNumber > secondNumber) {
    console.log(`${firstNumber} is larger than ${secondNumber}.`)
} else {
    console.log(`${secondNumber} is larger than ${firstNumber}.`)
}