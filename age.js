/*
Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

Requirements

* Your program should have a variable to store the age (an integer between 0 and 20)
* For the age categories, you may use whatever aging scale you'd like

*/


let age = 18.5;


//Using if
if (age >= 0 && age < 1){
    console.log("The age category is infant")
} else if (age >=1 && age < 3) {
    console.log("The age category is toddler")
} else if (age >=3 && age <= 8) {
    console.log("The age category is child")
} else if (age >=8 && age < 12) {
    console.log("The age category is preteen")
} else if (age >=12 && age < 18) {
    console.log("The age category is teen")
} else if (age >=18 && age <= 20) {
    console.log("The age category is young adult")
} else {
    console.log("Invalid age")
}

//Using Switch
//Not working
switch (true){
    case age >= 0 && age < 1:
        console.log("The age category is infant")
    case age >=1 && age < 3:
        console.log("The age category is toddler")
    case age >=3 && age <= 8:
        console.log("The age category is child")
    case age >=8 && age < 12:
        console.log("The age category is preteen")
    case age >=12 && age < 18:
        console.log("The age category is teen")
    case age >=18 && age <= 20:
        console.log("The age category is young adult")
    case age < 0 || age > 20:
        console.log("Invalid age")
        break;
    }




