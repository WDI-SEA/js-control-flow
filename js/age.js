let age = Math.floor(Math.random()*20)
console.log("age = " + age)
if (age < 1){
  console.log("infant")
}else if (age < 4){
  console.log("toddler")
}else if(age < 10){
  console.log("child")
}else if(age < 12){
  console.log("preteen")
}else if(age < 16){
  console.log("teen")
}else{
  console.log("young adult")
}