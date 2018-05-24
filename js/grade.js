var grade = 40;
switch (true) {
  case (grade >= 90 && grade <= 100):
    console.log("You got an A! Woo hoo!");
    break;
  case (grade >= 80 && grade <= 89):
    console.log("You got a B. Not bad.");
    break;
  case (grade >= 70 && grade <= 79):
    console.log("You got a C. Try harder next time.");
    break;
  case (grade >= 60 && grade <= 69):
    console.log("You got a D. You almost failed!");
    break;
  case (grade >= 50 && grade <= 59):
    console.log("You got an F! You failed this course.");
    break;
  default:
    console.log("You didn't get a grade.");
    break;
}