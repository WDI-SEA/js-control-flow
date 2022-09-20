let age = [0, 3, 5, 10, 14, 20]

for (let i=0; i<=age.length-1; i++) {
if (age[i]==0 && age[i]<=2) {
  console.log("infant")
} else if (age[i]>2 && age[i]<=4) {
  console.log("toddler")
} else if (age[i]>4 && age[i]<=9) {
  console.log("child")
} else if (age[i]>9 && age[i]<=12) {
  console.log("preteen")
} else if (age[i]>12 && age[i]<=19) {
  console.log("teen")
} else if (age[i]>19 && age[i]<=20) {
  console.log("young adult")
} else {
  console.log("age not valid")
}
}