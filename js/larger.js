let x = Math.floor(Math.random()*10 + 1);
let y = Math.floor(Math.random()*10 + 1);

//code that reads the number 
if (x < y){
  console.log(`The larger number of ${x} and ${y} is ${y}`)
}
else if(x > y) {
  console.log(`The larger number of ${x} and ${y} is ${x}`)
}
else{
  console.log(`The larger number of ${x} and ${y} is neither of them!`)
}