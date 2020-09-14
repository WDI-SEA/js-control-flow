/*  
Rewrite your first answer in grade.js using a switch statement!
*/

var Grade = (Math.random() * 101);

switch (Grade) {
    case (Grade <= 100 && Grade > 90):
        console.log("your score is A");
        break;

    case (Grade <= 90 && Grade > 80):
        console.log("your score is B");
        break;

    case (Grade <= 80 && Grade > 70):
        console.log("your score is C");
        break;

    case (Grade <= 70 && Grade > 60):
        console.log("your score is D");
        break;

    case (Grade <= 60):
        console.log("your score is F");
        break;

    default:
        console.log("failed")
        break;
}