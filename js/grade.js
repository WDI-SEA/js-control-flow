//write a program that will show grades A through F with integers between 1-100

var grade = 84;

switch(true) {
    case(90 <= grade && grade <= 100):
        console.log('A');
        break;
    case(80 <= grade && grade <= 89):
        console.log('B');
        break;
    case(70 <= grade && grade <= 79):
        console.log('C');
        break;
    case(60 <= grade && grade <= 69):
        console.log('D');
        break;
    case(0 <= grade && grade <= 59):
        console.log('F');
        break;
}