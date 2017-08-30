var gradeNum = 85;

switch (true) {
  case gradeNum >= 90:
    console.log('You got an A');
    break;
  case gradeNum >= 80:
    console.log("You got a B");
    break;
  case gradeNum >= 70:
    console.log("You got a C");
    break;
  case gradeNum >= 60:
    console.log("You got a D");
    break;
  default:
    console.log("You failed");
    break;
 }