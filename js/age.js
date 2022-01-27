/* ### age.js
Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

**Requirements**
* Your program should have a variable to store the age (an integer between 0 and 20)
* For the age categories, you may use whatever aging scale you'd like*/

let age = 0

if (age <=2) {
    console.log('infant')
} else if (age >=3 && age<=5) {
    console.log('toddler')
} else if (age >= 6 && age <=9) {
    console.log('child')
} else if (age >=10 && age <=12) {
    console.log('preteen')
} else if (age <=13 && age <= 18) {
    console.log('teen')
} else {
    console.log('young adult')
}