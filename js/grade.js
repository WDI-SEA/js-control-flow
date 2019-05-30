
var grade = 32;

if (grade === 100) {
    console.log('Your grade is A+, you are a genius!');
} else if (grade < 100 && grade >= 90) {
    console.log('Your grade is A, still good!');
} else if (grade >= 80) {
    console.log('Your grade is B, not bad!');
} else if (grade >= 70) {
    console.log('Your grade is C, passing grade!');
} else if (grade >= 60) {
    console.log('Your grade is D, oh no!');
} else {
    console.log('You got an F, better luck next time.');
}

//switch function, dont actually have to use for work

var grade = 32;

//basically checking when (true) and case(...) are equal. 
switch(true) {
    case (grade === 100):
        console.log('Your grade is A+, you are a genius!');
        break;
    case (grade < 100 && grade >= 90):
        console.log('Your grade is A, still good!');
        break;
    case (grade < 90 && grade >= 80):
        console.log('Your grade is B, not bad!');
        break;
    case (grade < 80 && grade >= 70):
        console.log('Your grade is C, passing grade!');
        break;
    case (grade < 70 && grade >= 60):
        console.log('Your grade is D, oh no!');
        break;
    case (grade < 60):
        console.log('You got an F, better luck next time.');
        break;
    default:
        console.log('Invalid input.');
        break;
}

switch(grade) {
    case 100:
    case 99:
    case 98:
    case 97:
    //do something for the A's
    break;
}