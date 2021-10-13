//SWITCH STATEMENT
let age = 60;
switch(true) {  
  case(age < 2):   
    console.log('infant');    
    break;  
  case (age >= 2 && age < 4):    
    console.log('toddler');    
    break;  
  case (age >= 4 && age < 10):
    console.log('child');    
    break; 
  case (age >= 10 && age < 12):
    console.log('preteen');    
    break; 
  case (age >= 12 && age < 18): 
    console.log('teen');    
    break; 
  case (age >=18 && age <= 20): 
    console.log('young adult');    
    break; 
       

  default:    
    console.log('adult');    
    break;}

    
//IF STATEMENT
let age = 60

if (age >= 0 && age <= 20) {
    if (age < 2) {
        console.log("infant")
    } else if (age >= 2 && age < 4) {
        console.log("toddler")
    } else if (age >= 4 && age < 10) {
        console.log("child")
    } else if (age >= 10 && age < 12) {
        console.log("preteen")
    } else if (age >= 12 && age < 18) {
        console.log("teen")
    } else if (age >=18 && age <= 20) {
        console.log("young adult") 
    }  
} else {
    console.log("adult")
}



