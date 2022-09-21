/*
Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

Requirements

Your program should maintain two variables
It should correctly identify which is larger and print that result

*/

let number1 = 3;
let number2 = 9;

if (number1 > number2){
    console.log("The larger number of "+ number1 +" and "+ number2+" is " + number1);
} else if (number1 < number2) {
    console.log("The larger number of "+ number1 +" and "+ number2+" is " + number2);
} else {
    console.log("Both numbers are equal!");
}