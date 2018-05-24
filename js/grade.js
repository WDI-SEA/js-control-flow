

//user enters grade for variable grade
var grade = 101;
//switch statement createst parameters
switch(true){
	case grade >= 90 && grade <= 100: 
		console.log('You got an A');
		break;
	case grade >= 80 && grade < 90: 
		console.log('You got an B');
		break;
	case grade >= 70 && grade < 80: 
		console.log('You got an C');
		break;
	case grade >= 60 && grade < 70: 
		console.log('You got an D');
		break;
	case grade >= 0 && grade < 60: 
		console.log('You got an F');
		break;
	default:
		console.log("Invalid grade!");
		break;
}