var grade = 99.9;

switch(true) {
  case (grade > 89):
    console.log('You got an A!');
    break;
  case (grade > 79):
    console.log('You got a B.');
    break;
  case (grade > 69):
    console.log('You got a C...');
    break;
  case (grade > 59):
    console.log('You got a D :/');
    break;
  case (grade < 59):
    console.log('You failed :(');
    break;
  default:
    console.log('invalid input');
  }
