let ageCategory = 21

if (ageCategory < 1) {
  console.log("You're an infant!")
} else if (ageCategory >= 1 && ageCategory <=4) {
  console.log("You're a toddler!")
} else if (ageCategory >=5 && ageCategory <=10) {
  console.log("You're a child!")
} else if (ageCategory >= 11 && ageCategory<=12) {
  console.log("You're a preteen!")
} else if (ageCategory >= 13 && ageCategory <= 18) {
  console.log("You're a teen!")
} else if (ageCategory >= 19 && ageCategory <= 20) {
  console.log("You're a young adult!")
} else {
  console.log("Unfortunately you're an adult...")
}

// infant 0
// toddler 1-4
// child 5-10
// preteen 11-12
// teen 13-18
// young adult 19-20
