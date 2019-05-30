
// ### larger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

var a = 1;
var b = 2;
var larger;


// if (a > b) {
//     console.log(a + " is larger than " + b);
// }
// else {
//     console.log(b + " is larger than " + a);
// }

var larger = (a > b) ? a + " is larger than " + b : b + " is larger than " + a;
console.log(larger); 