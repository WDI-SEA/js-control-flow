var score = 65;
var letterGrade = "";

if (90 < score && score <= 100) {
    letterGrade = "A";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (80 < score && score <= 90) {
    letterGrade = "B";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (70 < score && score <= 80) {
    letterGrade = "C";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (60 < score && score <= 70) {
    letterGrade = "D";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (0 <= score && score <= 60) {
    letterGrade = "F";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} 