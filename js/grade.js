// To calculate a letter grade from a number grade 0-100

var grade = 87
var letterGrade;

switch(true) {
    case (grade >= 90 && grade <= 100):
        letterGrade = "A";
        break;
    case (grade >= 80 && grade <= 89):
        letterGrade = "B";
        break;
    case (grade >= 70 && grade <= 79): 
        letterGrade = "C";
        break;
    case (grade >= 60 && grade <= 69):
        letterGrade = "D";
        break;
    default: 
        letterGrade = "F";
}

//Done