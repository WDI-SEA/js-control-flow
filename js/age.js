

function ageCategorize(){
    const max=20
    const min=0
    let age= Math.floor(Math.random() * (max - min + 1)) + min;
    let ageCategory= ""
    console.log(age)
  
    if(age<=1){
      ageCategory="Infant"
    }
  
    else if(age>1 && age<=4){
      ageCategory="Toddler"
    }
  
    else if(age>4 && age<=9){
      ageCategory="Child"
    }
  
      else if(age>9 && age<=12){
      ageCategory="Preteen"
    }
  
    else if(age>12 && age<=17){
      ageCategory="Teen"
    }
    else{
      ageCategory="Young Adult"
    }
  
    console.log(ageCategory)
  
  }
  
  ageCategorize()