var grade = 81

switch(true) {
	case (grade<=100 && grade>=90):
	console.log("A");
	break;
	case (grade<90 && grade>=80):
	console.log("B");
	break;
	case (grade<80 && grade>=70):
	console.log("c");
	break;
	case (grade<70 && grade>=60):
	console.log("D");
	break;
	case (grade<60):
	console("F");
	default: console.log("No score available");
	break;
};