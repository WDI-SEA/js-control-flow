let age = Math.floor(Math.random() * 20)

if(age >= 0 || age <= 2){
  console.log('You are an infant')
}else if(age >= 3 || age <= 4){
  console.log('You are a toddler')
}else if(age >= 5 || age <= 8){
  console.log('You are a child')
}else if(age >= 9 || age <= 12){
  console.log('You are a pre-teen')
}else if(age >= 13 || age <= 17){
  console.log('You are a teen')
}else if(age >= 18 || age <= 20){
  console.log('You are a young adult')
}else if(age > 20){
    console.log('You prolly be an adult. So be an adult and put a number between 0 - 20')
}