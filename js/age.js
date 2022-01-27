let age = 18

let ageGroups = ["infant", "toddler", "child", "preeteen", "teen", "young adult"]

if (age < 1) {
  console.log(ageGroups[0])
} else if (age === 1 || age < 3) {
  console.log(ageGroups[1])
} else if (age === 3 || age < 9) {
  console.log(ageGroups[2])
} else if (age === 9 || age < 12) {
  console.log(ageGroups[3])
} else if (age === 12 || age < 19) {
  console.log(ageGroups[4])
} else if (age === 19 || age > 19){
  console.log(ageGroups[5])
}
