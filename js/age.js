/* 
PROMPT: WRITE A PROGRAM THAT WILL PRINT THE AGE CATEGORY, GIVEN A VARIABEL WITH AN AGE. DISPLAY EITHER INFANT, TODDLER, CHILD, PRETEEN, TEEN, OR YOUNG ADULT FOR AN AGE THAT IS AN INTEGER BETWEEN 0 AND 20

REQUIREMENTS: 
- YOUR PROGRAM SHOULD HAVE A VARIABLE TO STORE THE AGE BETWEEN 0 AND 20
- FOR THE AGE CATEGORIES YOU CAN USE WHATEVER AGING SCALE YOU'D LIKE
*/

let age = 20;

/* IF ELSE FORMAT */
    if (age >= 0 && age <= 5) {
        console.log("Toddler")

    } else if (age >= 6 && age <= 10) {
        console.log("Child")

    } else if (age >= 11 && age <= 15) {
        console.log("Preteen")

    } else if (age >= 16 && age <= 18) {
        console.log("Teenager")

    } else if (age >= 19 && age <= 20) {
        console.log("Young Adult")
    }

/* SWITCH FORMAT */

let age2 = 20;

switch(age2) {
    case (age2 >= 0 && age2 <= 5):
        console.log("Toddler")
        break;
    case (age2 >= 6 && age2 <= 10):
        console.log("Child")
        break;
    case (age2 >= 11 && age2 <= 15):
        console.log("Preteen")
        break;
    case (age2 >= 16 && age2 <= 18):
        console.log("Teenager")
        break;
    case (age2 >= 19 && age2 <= 20):
        console.log("Young Adult")
        break;
}




