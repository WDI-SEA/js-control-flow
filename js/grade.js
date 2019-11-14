var grade = Math.random() * 100;
console.log(grade);

if (grade > 90){
    console.log("You earned an A!")
}
else if (grade > 80){
    console.log("You earned a B!")
}
else if (grade > 70){
    console.log("You earned a C!")
}
else if (grade > 60){
    console.log("You earned a D!")
}
else {
    console.log("You failed.")
}