//we have 6 categories, we can store in an array.
let age_category = ["infant", "toddler", "child", "preteen", "teen", "young adult"]

//we create an integer called age
let age = 190;

//going to make an if statement to check the age is between 0 and 20

if (age >= 0 && age <= 20) {
  //creating a nested if statement for the categories

  //after googling the age of each category, now I know that infant are 0 to 1, haha
  if (age >= 0 && age <= 1) {
    console.log(age_category[0])
  }
  //now moving to toddlers which is 1 to 3
  else if (age > 1 && age <= 3) {
    console.log(age_category[1])
  }
  //moving to children category
  else if (age > 3 && age <= 5) {
    console.log(age_category[2])
  }

  //preteen!
  else if (age > 5 && age <= 12) {
    console.log(age_category[3])
  }

  //teen
  else if (age > 12 && age <= 18) {
    console.log(age_category[4])
  }
  //young adult
  else if (age > 18 && age <= 20) {
    console.log(age_category[5])
  }
}

else {
  console.log("The age is not between 0 and 20, IT CANNOT BE CATEGORIZED!!!!!!!!!!")
}



