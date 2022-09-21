//hw
//we have 6 categories, we can store in an array.
let age_category = ["infant", "toddler", "child", "preteen", "teen", "young adult"]


let age = 12

switch (true) {
  case (age<=1):
    console.log(age_category[0])
    break
  case (age>2 && age <=4):
   console.log(age_category[1])
   break
  case (age>4 && age <=6):
    console.log(age_category[2])
  case (age > 7 && age<=12 ):
     console.log(age_category[3])
    break
  case (age>12 && age<=17):
     console.log(age_category[4])
    break
  case (age > 17 && age<=20):
     console.log(age_category[5])
    
  default:
    console.log('out of range, 0 to 20 only.');
}