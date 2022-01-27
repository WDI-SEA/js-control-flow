let num1 = Math.floor(Math.random()*20)
let num2 = Math.floor(Math.random()*20)
console.log(num1)

function larger(int1,int2){
  if(int1 > int2){
    console.log("The larger number of " + int1 + " and " + in2 + " is " + int1)
  }else if(int2 > int1){
    console.log("The larger number of " + int1 + " and " + int2 + " is " + int2)
  }
}
larger(num1,num2);