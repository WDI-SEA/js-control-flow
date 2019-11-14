var grade = Math.random() * 100;
console.log(grade);


switch(grade){
    case (grade> 90):
        console.log("You earned an A!")
    break;
    case (grade > 80):
        console.log("You earned a B!")
    break;
    case (grade > 70):
        console.log("You earned a C!")
    break;
    case (grade > 60):
        console.log("You earned a D!")
    break;
    default:
        console.log("You failed.");
}