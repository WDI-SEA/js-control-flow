// else if loop
let age = [0, 3, 5, 10, 14, 20]

for (let i=0; i<=age.length-1; i++) {
if (age[i]==0 && age[i]<=2) {
  console.log("Age = " + age[i] + " this is an infant")
} else if (age[i]>2 && age[i]<=4) {
  console.log("Age = " + age[i] + " this is a toddler")
} else if (age[i]>4 && age[i]<=9) {
  console.log("Age = " + age[i] + " this is a child")
} else if (age[i]>9 && age[i]<=12) {
  console.log("Age = " + age[i] + " this is a preteen")
} else if (age[i]>12 && age[i]<=19) {
  console.log("Age = " + age[i] + " this is a teen")
} else if (age[i]>19 && age[i]<=20) {
  console.log("Age = " + age[i] + " this is a young adult")
} else {
  console.log("age not valid")
}
}

// switch
  let ageP = prompt("How old are you?")
switch (true) {
  case (ageP==0 && ageP<=2):
    console.log("Age = " + ageP + " this is an infant")
    break
  case (ageP>2 && ageP<=4):
    console.log("Age = " + ageP + " this is a toddler")
    break
  case (ageP>4 && ageP<=9):
    console.log("Age = " + ageP + " this is a child")
    break
  case (ageP>9 && ageP<=12):
    console.log("Age = " + ageP + " this is a preteen")
    break
  case (ageP>12 && ageP<=19):
    console.log("Age = " + ageP + " this is a teen")
    break
  case (ageP>19 && ageP<=20):
    console.log("Age = " + ageP + " this is a young adult")
    break
  default:
    console.log("age not valid")
}