let num1 = 19
let num2 = 20

switch(true){
  case (num1 > num2):
  console.log( "The larger number of " + num1 + " and " + num2 + " is " + num1)
break;
  case (num1 < num2):
  console.log( "The larger number of " + num1 + " and " + num2 + " is " + num2)
break;
  case (num1 == num2):
  console.log( "The larger number of " + num1 + " and " + num2 + " is neither. They are equal to each other.")
}