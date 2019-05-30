// Write a program that will print the letter grade, given a 
// variable with a test score. Display either "A", "B", "C", "D", or "F", 
// for an score that is an integer between 0 and 100.

// Requirements

// Your program should have a variable to store the letter grade 
// (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like

var grade = [69];

if (grade >= 90) {
  console.log("You got an A!");
} else if (grade >= 80) {
  console.log("You got a B!");
} else if (grade >= 70) {
  console.log("You got a C, not bad!");
} else if (grade >= 60) {
  console.log("You got a D...keep improving!");
} else if (grade >= 50) {
  console.log("You got an F...WOOF.");
} else {
  console.log("Do your !@#$ing homework!");
}

