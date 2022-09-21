let age = prompt('what is your age?')
if (age <= 0) {
  console.log('Invalid age')
}
else if (age <= 1) {
  console.log('infant')
}
else if (age > 1 && age <= 5) {
  console.log('toddler')
}
else if (age > 6 && age <= 9) {
  console.log('child')
}
else if (age > 10 && age <= 12) {
  console.log('preteen')
}
else if (age > 13 && age <= 17) {
  console.log('teen')
}
else if (age > 18 && age <= 20) {
  console.log('young adult')
}
else if (age > 20) {
  console.log('adult')
}
else {
  console.log('outside boundary')
}