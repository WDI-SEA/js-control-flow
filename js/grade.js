var grade = 90

switch(true) {
  case (grade >= 90 && grade <= 100):
    console.log('You got an A!');
    break;
  case (grade >= 80 && grade <= 90):
    console.log('You got a B! Not bad!')
    break;
   case (grade >= 70 && grade <= 80):
    console.log('You got a C!')
    break;
  case (grade >= 60 && grade <= 70):
    console.log('You got a D!')
    break;
  default:
    console.log("You got an F. Review lessons!");
    break;
}
