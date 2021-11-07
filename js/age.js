for(let i = 0; i < 21; i++)
  listAge(i)

function listAge(age) {
  if(age <= 21 && age > 16) {
    console.log('young adult')
  } else if (age > 12) {
    console.log('preteen')
  } else if (age > 4) {
    console.log('child')
  } else if (age > 1) {
    console.log('toddler')
  } else if (age > 0){
    console.log('infant')
  }
}
