// ### grade.js
// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

// **Requirements**
// * Your program should have a variable to store the letter grade (an integer between 0 and 100)
// * For the letter grades, you may use whatever grading scale you like

// ## Bonus

// Rewrite your first answer in `grade.js` using a [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)! 

var score = 88;

if (score >= 90) {
    console.log("You get an A");
}
else if (score >= 80) {
    console.log("You get a B");
}
else if (score >= 70) {
    console.log("You get a C");
}
else if (score >= 60) {
    console.log("You get a D");
}
else {
    console.log("You get to take the course again. F :(");
}

// *********** Bonus round ************
switch(true) {

    case (score >= 90):
        console.log("You get an A");
        break;
    
    case (score >= 80):
        console.log("You get a B");
        break;
    case (score >= 70):
            console.log("You get a C");
            break;
    case (score >= 60):
            console.log("You get a D");
            break;
    default:
        console.log("You get to take the course again. F! ");
}