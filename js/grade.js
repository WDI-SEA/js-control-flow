// grade.js
// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

// Requirements

// Your program should have a variable to store the letter grade (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like


var test = 90;

// if ( test >= 90 ) {
//     console.log("A");
// } else if (test >= 80 ){
//     console.log("B")
// } else if (test >= 70) {
//     console.log("C")
// } else if ( test >= 60) {
//     console.log("D")
// } else if (test >= 50) {
//     console.log("E")
// } else {
//     console.log("F")
// };

// Bonus
//Rewrite your first answer in grade.js using a switch statement!

switch (true) {
    case test >= 90:
        console.log('A');
    break;
    case test >= 80:
        console.log('B');
    break;
    case test >= 70:
        console.log('C');
    break;
    case test >= 60:
        console.log('D');
    break;
    case test >= 50:
        console.log('E');
    break; 
    case test < 49:
        console.log('F');
    break;
    default:
        console.log("Please submit test");
    break;
}


