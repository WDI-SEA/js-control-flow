var grade;
var percentage = 85;

switch (Math.floor(percentage/10)) {
	case  9:
	grade = "A";
	break;
	case 8:
	grade = "B";
	break;
	case 7:
	grade = "C";
	break;
	case 6:
	grade = "D";
	break;
	default: 
		grade = "F";
}

console.log(grade);