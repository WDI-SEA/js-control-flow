let age = Math.floor(Math.random()*20)
console.log(age)
switch(true) {
  case (0<=age && age<=1):
    console.log('Infant')
    break;
  case (2<=age && age<=3):
    console.log('Toddler')
    break;
  case (4<=age && age<=12):
    console.log('Child')
    break;
  case (13<=age && age<=16):
    console.log('Preteen')
    break;
  case (17<=age && age<=20):
    console.log('Teen')
    break;
  default:
    console.log('Youre either not born or an adult')
    break;
}