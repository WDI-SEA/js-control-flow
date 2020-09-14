/*
Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

Requirements

Your program should have a variable to store the letter grade (an integer between 0 and 100)
For the letter grades, you may use whatever grading scale you like
*/

var Grade = (Math.random() * 101);

if (Grade <= 100 && Grade > 90) {
    console.log("Grade : A");
}

else if (Grade <= 90 && Grade > 80) {
    console.log("Grade : B");

}

else if (Grade <= 80 && Grade > 70) {
    console.log("Grade : C");

}

else if (Grade <= 70 && Grade > 60) {
    console.log("Grade : D");

}

else if (Grade <= 60) {
    console.log("Grade : F");

}
