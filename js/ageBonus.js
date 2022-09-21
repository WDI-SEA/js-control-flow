//we have 6 categories, we can store in an array.
let age_category = ["infant", "toddler", "child", "preteen", "teen", "young adult"]


let age = 120

switch (true) {
  case (age<=1):
    console.log(age_category[0])
    break
  case (age<=3):
   console.log(age_category[1])
   break
  case (age<=5):
    console.log(age_category[2])
  case (age<=12):
     console.log(age_category[3])
    break
  case (age<=18):
     console.log(age_category[4])
    break
  case (age<=20):
     console.log(age_category[5])
    
  default:
    console.log('out of range, 0 to 20 only.');
}