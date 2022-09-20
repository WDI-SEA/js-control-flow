//we have 6 categories, we can store in an array.
let age_category = ["infant", "toddler", "child", "preteen", "teen", "young adult"]


let age = 120

switch (age) {
  case 0:
  case 1:
    console.log(age_category[0])
    break
  case 2:
  case 3:
   console.log(age_category[1])
   break
  case 4:
  case 5:
    console.log(age_category[2])
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
     console.log(age_category[3])
    break
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
     console.log(age_category[4])
    break
  case 19:
  case 20:
     console.log(age_category[5])
    
  default:
    console.log('out of range, 0 to 20 only.');
}