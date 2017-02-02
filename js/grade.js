var grade = ()

switch(grade) {

  case (grade >= 90):
  	console.log('You got an A! Good job!');
    break;
  case (grade >= 80):
    console.log('You got an B! Good job!');
    break;
  case (grade >= 70):
    console.log('You got an C! We need to discuss tutoring!');
    break;
  case (grade >= 60):
    console.log('You got an D! DANGER!');
    break;
  case (grade < 60): 
    console.log('You got an F! Schedule a meeting!');
    break;
  default:
  	console.log('Invalid value');
  	break;
}