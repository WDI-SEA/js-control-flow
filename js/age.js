let age = 3
switch(true) {
  case (age >= 0 && age < 2):
    console.log('infant')
    break
  case (age >= 2 && age <= 4):
    console.log('toddler')
    break
  case (age > 4 && age < 10):
    console.log('child')
    break
  case (age >= 10 && age <=12):
    console.log('preteen')
    break
  case (age > 12 && age <=19):
    console.log('teen')
    break
  case (age === 20):
    console.log('young adult')
    break
}