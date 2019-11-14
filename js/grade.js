
var grade = Math.random() * 100;

if (grade > 90) {
    console.log("You got an A! Great Job!");
}

else if (grade < 90 && grade >= 80) {
    console.log("You got a B!");
}

else if (grade < 80 && grade >= 70) {
    console.log("You got a C.");
}

else if (grade < 70 && grade >= 60) {
    console.log("You got a D.");
}

else {
    console.log("Oops, you failed.");
}