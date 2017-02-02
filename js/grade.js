// Write a program that will print the letter grade, given a variable with a test score. 
// Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.
// Requirements

// Your program should have a variable to store the letter grade (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like
// You must use a switch statement 
// (hint, you may need to review and think about how the switch statement works)

var grade = Math.floor(Math.random() * 101);
var letterGrade = '';
console.log(grade);

switch(true) {
	case (grade >= 90):
		letterGrade = "A";
		break;
	case (grade >= 80):
		letterGrade = "B";
		break;
	case (grade >= 70):
		letterGrade = "C";
		break;
	case (grade >= 60):
		letterGrade = "D";
		break;
	case (grade < 60):
		letterGrade = "F";
		break;
	default:
		console.log("Enter a grade between 0 and 100");
}
console.log(letterGrade);