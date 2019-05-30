/*
grade.js
Write a program that will print the letter grade, 
given a variable with a test score. 
Display either "A", "B", "C", "D", or "F", 
for an score that is an integer between 0 and 100.

Requirements

Your program should have a variable to store the letter grade (an integer between 0 and 100)
For the letter grades, you may use whatever grading scale you like
*/

var grade = 78;

switch(true) {
    case (90<=grade && grade<=100):
        console.log("A");
        break;
    case (80<=grade && grade<90):
        console.log("B");
        break;
    case (70<=grade && grade<80):
        console.log("C");
        break;
    case (60<=grade && grade<70):
        console.log("D");
        break;    
    default:
        console.log("F");
        break;            
}

//use else if