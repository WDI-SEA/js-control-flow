//Write a program that reads two Number variables and prints which one is greater
//Your program should maintain two variables
//It should correctly identify which is larger and print that result

var a = 20;
var b = 20;

if ((a - b) > 0) {
    console.log(a + " is greater than " + b);
} else if ((a - b) < 0) {
    console.log(a + " is less than " + b);
} else {
    console.log(a + " is equal to " + b);
}