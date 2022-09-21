let age=10

if (0<= age && age<=3){
  console.log('infant')
    }else if(4<= age && age<=7) {
   console.log("toddler") 
   } else if (8<=age && age<=10){
   console.log("chlide")
   }else if (11<= age && age<=14) {
   console.log("preteen")
   } else if (15<=age && age<=16) {
   console.log("teen") 
   }else if (18 <= age && age <= 20){ 
   console.log("young adult")
}


//Bonus


switch (true) {
  case (0 <= age && age <= 3):
    console.log('infant')
    break;
   case (4 <= age && age <= 7):
    console.log("toddler")
    break;
   case (8 <= age && age <= 10):
    console.log("chlide")
    break;
   case (11 <= age && age <= 14):
    console.log("preteen")
    break;
   case (15 <= age && age <= 16):
    console.log("teen")
    break;
   case (18 <= age && age <= 20):
    console.log("young adult")
    break;
    default:
    console.log("no age category");
    break;
}
