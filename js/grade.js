var grade = 100;

switch(true) {
	case grade >= 90 && grade <= 100:
		console.log("You have an A");
	break;
	case grade >= 80 && grade < 90:
		console.log("You have a B");
	break;
	case grade >= 70 && grade < 80:
		console.log("You have a C");
	break;
	case grade >=60 && grade < 70:
		console.log("You have a D");
	default: 
		console.log("You have an F");
}