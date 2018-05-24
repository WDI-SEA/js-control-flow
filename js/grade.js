var grade = 92;

switch (true) {
    case (grade >= 90 && grade <= 100):
        console.log('A');
        break;
    case (grade >= 80 && grade < 90):
        console.log('B');
        break;
    case (grade >= 70 && grade < 80):
        console.log('C');
        break;
    case (grade >= 60 && grade < 70):
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}

