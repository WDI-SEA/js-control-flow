var grade = 83;

switch(true) {
  case (90<=grade && grade<=100):
    console.log('You got a A! Great job!');
    break;
  case (80<=grade && grade<90):
    console.log('You got a B! Good job!');
    break;
  case (70<=grade && grade<80):
    console.log('You got a C! Fair job!');
    break;
  case (60<=grade && grade<70):
    console.log('You got a D! Bad job!');
    break;
  default:
    console.log('You got an F! FAIL!');
}