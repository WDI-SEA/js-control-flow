let age = 0;
function ageCategory (age) {
  if (age >= 0 && age <3) {
    console.log('infant')
  } else if (age >= 3 && age < 6) {
    console.log('toddler')
  } else if (age >= 6 && age < 9) {
    console.log('child') 
  } else if (age >= 9 && age < 13) {
    console.log('preteen')
  } else if (age >= 13 && age < 17) {
    console.log('teen')
  } else if (age >= 17 && age <= 20) {
    console.log('young adult')
  } else {
    console.log('Please input a number between 0 and 20')
  }
}

ageCategory(20)