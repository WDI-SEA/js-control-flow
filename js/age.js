 var ages =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let age = "21";
switch(true) {
  case (1>age):
    console.log('Infant');
    break;
  case (1<=age && age<=3):
    console.log('Toddler');
    break;
  case ( 4<=age && age<=8):
    console.log('Child');
    break;
  case ( 9<=age && age<=13):
    console.log('Pre-teen');
    break;
  case ( 13<=age && age<=17):
    console.log('Teen');
    break;
  case ( 18<=age && age<=20):
    console.log('Young Adult');
    break;
  default:
    console.log('Enter from 0-20 only');
    break;
}
