var score = Math.floor(Math.random() * 101);
var letterGrade = "";

if (score >= 90) {
    letterGrade = "A";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (score >= 80) {
    letterGrade = "B";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (score >= 70) {
    letterGrade = "C";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (score >= 60) {
    letterGrade = "D";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else if (score >= 0) {
    letterGrade = "F";
    console.log("Your test score was", score, "and your letter grade is", letterGrade+".");
} else {
    console.log("Your score was", score + ".", "Please enter a valid score.");
}