/*larger.js
Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

Requirements

Your program should maintain two variables
It should correctly identify which is larger and print that result

This seems optimized if you use a switch statement.

*/
let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

if (a > b && b < a) {
    console.log(`The Larger number of A:${a} and B:${b} is A:${a}`)
} else if (a < b && b > a) {
    console.log(`The Larger number of B:${b} and A:${a} is B:${b}`)
} else if (a == b && b == a) {
    console.log(`${a} and ${b} are the same value.`)
} else {
    console.log("It appears something went wrong with the program.")
}

