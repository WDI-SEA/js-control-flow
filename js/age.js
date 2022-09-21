let age_category = ["infant", "toddler", "child", "preteen", "teen", "young adult"]
let age = 0

if (age >= 0 && age <= 1) {
  console.log("Infant")
}
else if (age > 1 && age <= 4) {
  console.log("Todler!")
}
else if (age > 5 && age <= 10) {
  console.log("Child!")
}
else if (age > 10 && age <= 13) {
  console.log("Preteen!")
}
else if (age > 13 && age <= 17) {
  console.log("Teen!")
}
else if (age > 17 && age <= 20) {
  console.log("Adult!")
}
