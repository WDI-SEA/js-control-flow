var grade = Math.floor(Math.random() * 101)

switch (true) {
	case (grade >= 90): 		
	  console.log("You scored " + grade + " which is an A");
		break;
	case (grade >= 80):
		console.log("You scored " + grade + " which is a B");
		break;
	case (grade >= 70):
		console.log("You scored " + grade + " which is a C");
		break;
	case (grade >= 60):
		console.log("You scored " + grade + " which is a D");
		break;
	case (grade < 60):
		console.log("You scored " + grade + " which is an F");
		break;
	default:
		console.log("Please enter a score between 0-100");
} 

