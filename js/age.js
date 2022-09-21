let age = window.prompt("Please enter your age")

if (age < 0) {
  console.log('Please enter a valid age between 0 and 20')
}
else if (age < 3) {
  console.log('infant')
}
else if (age < 6) {
  console.log('Child')
}
else if (age < 13) {
  console.log('preteen')
}
else if (age < 20) {
  console.log('teen')
}
else if (age === 20) {
  console.log('freshman')
}
else {
  console.log('Please enter a valid age between 0 and 20')
}
