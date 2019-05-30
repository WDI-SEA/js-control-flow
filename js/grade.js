// ### grade.js
// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", 
// for an score that is an integer between 0 and 100.

var score = 75;
switch(true){
    case(90<= score && score <= 100):
    console.log('You got an A');
    break;
    case(80<= score && score <= 90):
    console.log('you got a B');
    break;
    case(70<= score && score <= 80):
    console.log('you got a C');
    break;
    case(60<= score && score <= 70):
    console.log('you got a D');
    break;
    case(0<= score && score <= 50):
    console.log('you failed BOI!');
}