var grade = 78;

if (grade>= 90 && grade<= 100) {
    console.log("A");
    } else if ( grade >= 80 && grade < 90) {
    console.log("B");
    } else if (grade >= 70 && grade < 80) {
    console.log("C");
    } else { grade < 70 && grade >= 0 
    console.log("F")
}

switch(true) {
    case (grade>= 90 && grade<= 100):
      console.log('You got an A! Great job!');
      break;
    case (grade >= 80 && grade < 90):
      console.log('You got an B! Good job!');
      break;
    case (grade >= 70 && grade < 80):
      console.log('You got an C! Good job!');
      break;
  default :
      console.log('You failed!');
      break;
  }


switch(true) {
  case "A":
    console.log('You got an A! Great job!');
    break;
  case "B":
    console.log('You got an B! Good job!');
    break;
  case "C":
    console.log('You got an C! Good job!');
    break;
default:
    console.log('You failed!');
    break;
}