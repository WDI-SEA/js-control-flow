let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13, 14, 15, 16, 17, 18, 19, 20];

let x = Math.floor(Math.random()*age.length + 1)

if(x < 3){
  console.log(x + " years old is an infant.");
}
else if(x < 5){
  console.log(x + " years old is a toddler.");
}
else if(x < 10){
  console.log(x + " years old is a child.")
}
else if(x < 13){
  console.log(x + " years old is a preteen.");
}
else if(x < 18){
  console.log(x + " years old is a teen.");
}
else{
  console.log(x + " years old is a young adult");
}