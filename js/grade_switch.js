var grade = 90;
switch(true){
    case (90 <= grade && grade <= 100):
        console.log("You got an A!!");
        break;
    case (80 <= grade && grade < 90):
        console.log("You got a B !!");
        break;
    case(70 <= grade && grade < 80):
        console.log("You got a C");
        break;
    case(60 <= grade && grade < 70):
        console.log("You got a D");
        break;
    default:
        console.log("You got a F. Try again");
        break;
}