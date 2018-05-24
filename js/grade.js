/*Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

**Requirements**
* Your program should have a variable to store the letter grade (an integer between 0 and 100)
* For the letter grades, you may use whatever grading scale you like
* You must use a switch statement (hint, you may need to review and think about how the `switch` statement works)*/

var grade = 77.6;

switch (true) {
    case grade >= 90:
        console.log("You got an A. Hooray!");
        break;
    case grade >= 80:
        console.log("You got a B. Good stuff.");
        break;
    case grade >= 70:
        console.log("You got a C. At least you passed? ¯\\_(ツ)_/¯");
        break;
    case grade >= 60:
        console.log("You got a D. This is bad news.");
        break;
    case grade < 60:
        console.log("You got an F. What was you thinking?!");
        break;
// in case the grade is 'purple' or something else that's not a number
    default:
        console.log("Are you sure that's your score?");
}
