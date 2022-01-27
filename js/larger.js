const readline = require('readline-sync');
let num1 = 0
let num2 = 0
num1 = readline.question(`Enter first number :\n`)
num2 = readline.question(`Enter second number :\n`)

// let num1 = 5
// let num2 = 5
if (num1 > num2) {
  console.log(num1 + ' is greater than ' + num2)
} else if (num2 > num1) {
  console.log(num2 + ' is greater than ' + num1)
} else {
  console.log(num2 + ' is equal to ' + num1)
}