let age = 0
const readline = require('readline-sync')
age = readline.question(`Age :\n`)

if (age >= 0 && age < 1) {
  console.log(age + ' is an infant.')
} else if (age >= 1 && age < 3) {
  console.log(age + ' is a toddler.')
} else if (age >= 3 && age < 5) {
  console.log(age + ' is a child.')
} else if (age >= 5 && age <= 12) {
  console.log(age + 'is preteen.')
} else if (age > 12 && age < 18 ) {
  console.log(age + ' is teen.')
} else if (age >= 18 && age <= 20) {
  console.log(age + ' is young adult.')
} else {
  console.log(age + " is an adult.")
}


switch (age) {
    case (age >= 0 && age < 1):
      console.log(age + ' is an infant.');
      break;
    case (age >= 1 && age < 3):
      console.log(age + ' is a toddler.');
      break;
    case (age >= 3 && age < 5):
      console.log(age + ' is a child.');
      break;
    case (age >= 5 && age <= 12):
      console.log(age + 'is preteen.');
      break;
    case (age > 12 && age < 18 ):
      console.log(age + ' is teen.');
      break;
    case (age >= 18 && age <= 20):
      console.log(age + ' is young adult.');
      break;
    default:
      console.log(age + " is an adult.");
      break;
    }