var grade = 82;

switch (true) {
  case (grade >= 90 && grade <= 100):
    console.log('You got an A! Woo!');
    break;
  case (grade >= 80 && grade < 90):
    console.log('You got a B! Not bad.');
    break;
  case (grade >= 70 && grade < 80):
    console.log('You got a C! Meh.');
    break;
  case (grade >= 60 && grade < 70):
    console.log('You got a D! Ouch.');
    break;
  case (grade >= 0 && grade < 60):
    console.log('You got an F. You failed.');
    break;
  default:
    console.log('Not a valid grade input...');
}
