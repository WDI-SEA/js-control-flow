let age = 0
if(age > 0 && age < 3) {
  console.log("infant")
} else if (age >= 3 && age < 5) {
  console.log("toddler")
} else if (age >= 5 && age < 10) {
  console.log("child")
} else if (age >= 10 && age < 13) {
  console.log("preteen")
} else if (age >= 13 && age < 20) {
  console.log("teen")
} else if (age === 20) {
  console.log("young adult")
} else {
  console.log("age is outside of accepted range")
}
