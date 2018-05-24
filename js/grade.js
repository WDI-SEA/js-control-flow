
// assignment grade.js
var testScore = 88;

switch(true) {
  case testScore >= 90:
    console.log('A');
    break;
  case testScore >= 80 && testScore <= 89:
    console.log('B');
    break;
  case testScore >= 70 && testScore <= 79:
    console.log('C');
    break;
  case testScore >= 60 && testScore <= 69:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}






// practice -before final solution
var testScore = 85;

switch(true) {
  case testScore >= 90 && testScore <= 100:
    console.log('You got an A, great work!');
    break;
  case testScore >= 80 && testScore <= 89:
    console.log('You got a B, not too bad!');
    break;
  default:
    console.log("Keep working hard; you'll get there");
    break;
}
