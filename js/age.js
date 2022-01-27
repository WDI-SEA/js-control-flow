let age = 20
// if (age === 20) {
//   console.log("Young adult") 
// } else if(age < 2){
//   console.log("Infant")
// } else if ( age < 4) {
//   console.log("Toddler")
// } else if (age < 10){
//   console.log("Child")
// } else if (age <= 12){
//   console.log("Preteen")
// } else if (age <= 19){
//   console.log("Teenager")
// } else {
//   console.log("You're too old, buddy.")
// }

switch (true) {
  case age === 20:
    console.log("Young Adult")
    break;
  case age < 2:
    console.log("Infant")
    break;
  case age < 4:
    console.log("Toddler")
    break;
  case age < 10:
    console.log("Child")
    break;
  case age <= 12:
    console.log("Preteen")
    break;
  case age <= 19:
    console.log("Teenager")
    break;
  default:
    console.log("Too old")
}