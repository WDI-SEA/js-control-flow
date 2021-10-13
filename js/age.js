for(let i=0; i<21; i++){
    tellCategory(i)
  }
  
function tellCategory(age){
    if(Number.isInteger(age)){
        if(age<2){
        console.log(age + ': infant')
        }
        else if(age<6){
        console.log(age + ': toddler')
        }
        else if(age<10){
        console.log(age + ': child')
        }
        else if(age<13){
        console.log(age + ': preteen')
        }
        else if(age<20){
        console.log(age + ': teen')
        }
        else if(age<21){
        console.log(age + ': young adult')
        }
    }
    else {
        console.log('Not an integer')
    }
}