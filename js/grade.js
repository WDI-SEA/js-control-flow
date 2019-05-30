var testScore;

switch(true){

    case(grade <=90 && grade<=100):
    console.log('Great work you got an A!')
    break;

    case(grade <=80 && grade<=90):
    console.log('Good work you got an B')
    break;

    case(grade <=70 && grade<=80):
    console.log('okay work you got an C')
    break;

    case(grade <=60 && grade<=70):
    console.log('You got an D keep working better')
    break;

    default:
     console.log("you failed better luck next time")   
     break;


}