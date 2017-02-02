// Write a program that will print the letter grade, given a variable with a test score.
// Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.
//
// Requirements
//
// Your program should have a variable to store the letter grade (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like
// You must use a switch statement (hint, you may need to review and think about how the switch statement works)

// A	90-100
// B	80-89
// C	70-79
// D	60-69
// F	0-59

function getLetterGrade(testScore) {
  var letterGrade = "";
  switch (true) {
    case (testScore >= 90 && testScore <= 100):
      letterGrade = "A";
      break;
    case (testScore >= 80 && testScore < 90):
      letterGrade = "B";
      break;
    case (testScore >= 70 && testScore < 80):
      letterGrade = "C";
      break;
    case (testScore >= 60 && testScore < 70):
      letterGrade = "D";
      break;
    case (testScore >= 0 && testScore < 60):
      letterGrade = "F";
      break;
    default:
      letterGrade = "Invalid test score";
  }
  return letterGrade;
}

console.log(getLetterGrade(95));
console.log(getLetterGrade(82));
console.log(getLetterGrade(73));
console.log(getLetterGrade(65));
console.log(getLetterGrade(0));
console.log(getLetterGrade(-50));
