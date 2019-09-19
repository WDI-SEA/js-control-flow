var grade = 61;

// if (grade >= 90){
//     console.log("A")
// } else if (grade >= 80 && grade < 89){
//     console.log("B")
// } else if (grade >= 70 && grade < 79){
//     console.log("C")
// } else if (grade >= 60 && grade < 69){
//     console.log("D")
// } else {
//     console.log("Flunked out")
// }

switch(true){
    case (grade >= 90):
    console.log("A")
    break;
    case (grade >= 80 && grade <= 89):
    console.log("B")
    break;
    case (grade >= 70 && grade <= 79):
    console.log("C")
    break;
    case (grade >= 60 && grade <= 69):
    console.log("D")
    break;
    default:
    console.log("you failed")


}