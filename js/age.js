

// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like



const age = 9

if (age < 2) {
    console.log('Infant')
} else if ((age >= 2) && (age < 5)) {
    console.log('Toddler')
} else if ((age >= 5) && (age < 9)) {
    console.log('Child')
} else if ((age >= 9) && (age < 13)) {
    console.log('Preteen')
} else if ((age >= 13) && (age < 17)) {
    console.log('Teen')
} else if ((age >= 17) && (age <= 20)) {
    console.log('Young Adult')
}