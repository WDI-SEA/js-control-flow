
const age = prompt(Enter an age between 0 and 20:)
if (age > 0 && age < 1) {
  console.log(infant)
} else if (age >= 1 && age < 3) {
  console.log(toddler)
} else if (age >= 3 && age < 5) {
  console.log(child)
} else if (age >= 5 && age < 12) {
  console.log(preteen)
} else if (age >= 12 && age < 18) {
  console.log(Teen)
} else if (age >= 18 && age < 20) {
  console.log(Young Adult)
} else {
  console.log(You Entered an invalid age! Try again)
}
