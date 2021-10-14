//age variable, to be assigned by user
let age = 19

//check whether number is an integer between 0 and 20
if (age > 20 || age < 0 || !Number.isInteger(age)) {
  console.log("Please enter a valid age (an integer from 0 to 20).")
//return appropriate age cohort
} else if (age >= 0 && age < 2) {
  console.log(`You are ${age}, just an infant!`)
} else if (age >=2 && age < 4) {
  console.log(`You are ${age}, a toddler!`)
} else if (age >= 4 && age < 11) {
  console.log(`You are ${age}, a child!`)
} else if (age >= 11 && age < 13) {
  console.log(`You are ${age}, almost a teen, but not quite!`)
} else if (age >= 13 && age < 18) {
  console.log(`You are ${age}, a teenager! Hang in there.`)
} else if (age >=18 && age <= 20) {
  console.log(`Wow, ${age} years old! An adult, albeit a young one.`)
//nothing should make it past this line, but just in case :)
} else {
  console.log("Please enter a valid age (an integer from 0 to 20).")
}