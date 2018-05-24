var testScore = 85;

switch(true) {
  case testScore >= 90 && testScore <= 100:
    console.log('You got an A, great work!');
    break;
  case testScore >= 80 && testScore <= 89:
    console.log('You got a B, not to bad!');
    break;
  default:
    console.log("Keep working hard; you'll get there");
    break;
}
