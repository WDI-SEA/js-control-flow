//Write a program that will print the letter grade, given a variable with a test score.
//Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

//Your program should have a variable to store the letter grade (an integer between 0 and 100)

var testScore = 77;

switch(true) {
    case (testScore >=90 && testScore <= 100): 
        console.log("You got an A!");
    break;
    case (testScore >=80):
        console.log("You got a B!");
    break;
    case (testScore >=70):
    console.log("You got a C...");
    break;
    case (testScore >=60): 
    console.log("You got a D :(");
    break;
    default:
    console.log("You failed (((");
}