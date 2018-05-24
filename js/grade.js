
var grade = 83;

switch(true) {
  case (grade >= 90 && grade <= 100):
    console.log('You got an A!');
    break;
  case (grade >= 80 && grade <= 90):
    console.log('You got a B.');
    break;
  case (grade >= 70 && grade <= 80):
    console.log('You got a C');
    break;
  case (grade >= 60 && grade <= 70):
    console.log('You got a D');
    break;
  default:
    console.log("Better luck next time!");
    break;
}
