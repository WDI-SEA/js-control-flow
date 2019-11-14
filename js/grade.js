/*Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

Requirements

Your program should have a variable to store the letter grade (an integer between 0 and 100)
For the letter grades, you may use whatever grading scale you like
*/

var letterGrade =""
var testGrade = Math.random() * 100

console.log(testGrade)

if (testGrade > 90) {
  letterGrade = "A"
}

else if (testGrade > 80) {
  letterGrade = "B"
}
else if (testGrade > 70) {
  letterGrade = "C"
}
else if (testGrade < 60) {
  letterGrade = "D"
}
else {
  letterGrade = "F"
}

console.log(letterGrade)