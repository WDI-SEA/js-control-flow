let age = 20

if (age <= 1) {
  console.log('infant')
} else if (age > 1 && age < 3) {
  console.log('toddler')
} else if (age >= 3 && age < 9) {
  console.log('child')
} else if (age >= 9 && age < 13) {
  console.log('preteen')
} else if (age >= 13 && age < 20) {
  console.log('teen')
} else {
  console.log('young adult')
}