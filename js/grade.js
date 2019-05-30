// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

// Your program should have a variable to store the letter grade (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like

var grade = "100";

if (grade === 100) {
    console.log("Wow, a perfect score! An A++ for you!")
} else if (grade > 100) {
    console.log("That doesn't exist, stop cheating")
} else if (grade >= 90) {
    console.log("You get an A!")
} else if (grade >= 80) {
    console.log("You get a B!")
} else if (grade >= 70) {
    console.log("You got a C")
} else if (grade >= 60) {
    console.log("You got a D, sad face")
} else {
    console.log("You got an F. Try harder")
};

var score = 95;

switch(true) {
    case (score === 100):
        console.log('A+');
        break;
    case (score >= 90):
        console.log('A');
        break;
    case (score >= 80):
        console.log('B');
        break;
    case (score >= 70):
        console.log('C');
        break;
    case (score >= 60):
        console.log('D');
        break;        
    default:
        console.log('F');
        break;
}