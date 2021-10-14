// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// Requirements

// Your program should maintain two variables
// It should correctly identify which is larger and print that result

let num1 = Math.round(Math.random()*100)
let num2 = Math.round(Math.random()*100)

if (num1 === num2) {
  console.log ("Both " + num1 + " and " + num2 + " are equal to one another.")
}
else if (num1 > num2) {
  console.log("The larger number of " + num1 + " and " + num2 + " is " + num1 + ".")
} else if (num2 > num1) {
  console.log("The larger number of " + num1 + " and " + num2 + " is " + num2 + ".")
}