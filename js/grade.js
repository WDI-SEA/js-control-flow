// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

// **Requirements**
// * Your program should have a variable to store the letter grade (an integer between 0 and 100)
// * For the letter grades, you may use whatever grading scale you like

function getLetterGrade(testScore) {
    let letterGrade;
    if (testScore >= 90) {
        letterGrade = 'A';
    } else if (testScore >= 80) {
        letterGrade = 'B';
    } else if (testScore >= 70) {
        letterGrade = 'C';
    } else if (testScore >= 60) {
        letterGrade = 'D';
    } else if (testScore >= 0) {
        letterGrade = 'F';
    } else {
        return "Please enter a valid letter grade."
    }
    return letterGrade;
}

scores = [100, 90, 85, 75, 60, 3, -1]
scores.forEach(element => {
    console.log(getLetterGrade(element))    
});