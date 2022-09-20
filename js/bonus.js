
function ageCategorize() {
    const max = 20
    const min = 0
    let age = Math.floor(Math.random() * (max - min + 1)) + min
    let ageCategory = " "
    console.log(age)
  
    switch (true) {
      case (age <= 1):
        ageCategory = "Infant"
        break
  
      case (age > 1 && age <= 4):
        ageCategory = "Toddler"
        break
  
      case (age > 4 && age <= 9):
        ageCategory = "Child"
        break
  
      case (age > 9 && age <= 12):
        ageCategory = "Preteen"
        break
  
  
      case (age > 12 && age <= 17):
        ageCategory = "Teen"
        break
  
      default:
        ageCategory = "Young Adult"
    }
  
    console.log(ageCategory)
  
  }
  
  ageCategorize()