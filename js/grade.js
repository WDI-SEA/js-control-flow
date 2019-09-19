var gradeA = 'Student has received an A'
var gradeB = 'Student has received a B'
var gradeC = 'Student has received a C'
var gradeD = 'Student has received a D'
var gradeF = 'Failed'
var gradeNumber = 95;
if (gradeNumber >= 90) {
    console.log(`${gradeA}`);
} else if (gradeNumber >= 80 && gradeNumber <= 89) {
    console.log(`${gradeB}`);
} else if (gradeNumber >= 70 && gradeNumber <= 79) {
    console.log(`${gradeC}`);
} else if (gradeNumber >= 60 && gradeNumber <= 69) {
    console.log(`${gradeD}`);
} else {
    console.log(`${gradeF}`);
}