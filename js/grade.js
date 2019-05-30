/* Write a program that will print the letter grade, given a variable with a test score. 
Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

Requirements

Your program should have a variable to store the letter grade (an integer between 0 and 100)
For the letter grades, you may use whatever grading scale you like */


var testScore = 50;
var letterGrade;

switch (true) {
    case testScore >= 80 && testScore <= 100:
    letterGrade = "A";
    break;

    case testScore >=60 && testScore <= 80:
    letterGrade = "B";
    break;

    case testScore >= 40 && testScore <= 60:
    letterGrade = "C";
    break;

    case testScore >= 20 && testScore <= 40:
    letterGrade = "D";
    break;

    case testScore >= 00 && testScore <= 20:
    letterGrade = "F";
    break;
}

    console.log(letterGrade);   

    //Alternative solution

    var grade = 99;

    if (grade >= 90 && grade <= 100) {
        console.log("A");
        //a
    } else if (grade >= 80) {
        console.log("B");
    }   //b
        else if (grade >= 70) {
        console.log("C");
     }   //c
        else {
        console.log("F");
        //f
        }
        
    