let age = 11

if (age >= 0 && age <= 2) {
  console.log("you are an infant!")
}
else if (age >= 3 && age <= 5) {
  console.log("you are a toddler!")
}
else if (age >= 6 && age <=9) {
  console.log("you are a child!")
}
else if (age >= 10 && age <= 12) {
  console.log("you are a pre-teen!")
}
else if (age >= 13 && age <= 17) {
  console.log("you are a teen!")
}
else if (age >= 18 && age <= 20) {
  console.log("you are a young adult!")
}
else if ((age < 0) && (age > 20)) {
  console.log("You aren't in this age range!")
}
