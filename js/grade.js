// ###grade.js Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

// Requirements

// Your program should have a variable to store the letter grade (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like
// You must use a switch statement (hint, you may need to review and think about how the switch statement works)


var grade = 46;
switch(true) {
	case (grade <= 100 && grade >= 90): 
		console.log('You got an A');
		break;
	case (grade <= 89 && grade >= 80):
		console.log('You got a B');
		break;
	case (grade <= 79 && grade >= 70):
		console.log('You got a C');
		break;
	case (grade <= 69 && grade >= 0):
		console.log('You failed dude...ouch');
		break;
	default:
		console.log('You should come to class');
}