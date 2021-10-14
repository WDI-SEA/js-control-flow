// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// Requirements

// Your program should have a variable to store the age (an integer between 0 and 20)
// For the age categories, you may use whatever aging scale you'd like

let age = Math.floor(Math.random()*20)

if (age >=0 && age <= 4) {
  console.log("A human at age " + age + " is considered to be a toodler.")
} else if (age >=5 && age <= 10) {
  console.log("A human at age " + age + " is considered to be a child.")
} else if (age >=11 && age <= 13) {
  console.log("A human at age " + age + " is considered to be a preteen.")
} else if (age >=14 && age <= 17) {
  console.log("A human at age " + age + " is considered to be a teenager.")
} else if (age >=18 && age <= 20) {
  console.log("A human at age " + age + " is considered to be a adult.")
}
