// Write a program that reads two Number variables and prints which one is greater.
// Your program should maintain two variables
// It should correctly identify which is larger and print that result

var num1 = 10;
var num2 = 5;

if (num1 === num2) {
    console.log(num1 + " and " + num2 + " are equal")
} else if (num1 > num2) {
    console.log(num1 + " is greater than " + num2 + " by " + (num1 - num2))
} else {
    console.log(num2 + " is greater than " + num1 + " by " + (num2 - num1))
}