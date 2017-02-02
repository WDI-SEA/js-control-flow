
var grade = "Enter valid score.";
var score = 80;
switch(true){
  case (score >= 90):
    grade = "A";
    console.log(grade);
    break;
  case (score >= 80):
    grade = "B";
    console.log(grade);
    break;
  case (score >= 70):
    grade = "C";
    console.log(grade);
    break;
  case (score >= 60):
    grade = "D";
    console.log(grade);
  case (score >= 50):
    grade = "F";
    console.log(grade);
    break;
  default:
    console.log(grade);
    break;
 };
