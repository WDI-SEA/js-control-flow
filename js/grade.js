const age = 20

if (age <= 1) {
    console.log("infant")
} else if (age == 2 || age <= 3) {
   console.log("toddler")
} else if (4 === age && age <= 9) {
   console.log("child")
} else if (10 === age && age <= 11) {
   console.log("preteen")
} else if (12 === age && age <= 19) {
   console.log("teen")
} else {
    console.log("young adult")
}