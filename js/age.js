let age =18;


let ageCatagory = ["infant", "toddler", "child", "preteen", "teen", "young adult"]

if (age < 2){
  console.log(`${age} is an ${ageCatagory[0]}'s age`)
  } else if (age >= 2 && age <= 4) {
    console.log(`${age} is a ${ageCatagory[1]}'s age`)
  } else if (age >= 5 && age <= 8) {
    console.log(`${age} is a ${ageCatagory[2]}'s age`)
  } else if (age >= 9 && age <= 12) {
    console.log(`${age} is a ${ageCatagory[3]}'s age`)
  } else if (age >= 13 && age <= 19) {
    console.log(`${age} is a ${ageCatagory[4]}'s age`)
  } else if (age === 20) {
    console.log(`${age} is a ${ageCatagory[5]}'s age`)
  } else {
    console.log("input a age between 0-20")
    }

    console.log(age)