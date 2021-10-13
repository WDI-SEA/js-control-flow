let age = '25'

if (age >= 0 && age <= 2) {
  console.log('infant')
} else if (age >= 2 && age <= 5) {
  console.log('toddler')
} else if (age >= 6 && age <= 9) {
  console.log('child')
} else if (age >= 10 && age <= 13) {
  console.log('preteen')
} else if (age >= 14 && age <= 18 ) {
  console.log('young adult')
} else {
  console.log('adult')
}

// BONUS

switch (age) {
    case (age >= 0 && age <= 2):
    console.log('infant')
    break;
    case (age >= 2 && age <= 5):
    console.log('toddler')
    break;
    case (age >= 6 && age <= 9):
    console.log('child')
    break;
    case (age >= 10 && age <= 13):
    console.log('preteen')
    break;
    case (age >= 14 && age <= 18):
    console.log('young adult')
    break;
    default:
    console.log('adult')
    break;
  }