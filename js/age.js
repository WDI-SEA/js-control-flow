const age = 1;

// if (age > 0 && age <= 20) {
//   if (age <= 1) {
//     console.log("Infant");
//   } else if (age >= 2 && age <= 4) {
//     console.log("Toddler");
//   } else if (age >= 5 && age <= 12) {
//     console.log("Child");
//   } else if (age >= 13 && age <= 20) {
//     console.log("Teen");
//   }
// }

switch (true) {
  case age > 0 && age <= 2:
    console.log("Infant");
    break;
  case age >= 2 && age <= 4:
    console.log("Toddler");
    break;
  case age >= 5 && age <= 12:
    console.log("Child");
    break;
  case age >= 13 && age <= 20:
    console.log("Teen");
  default:
    // console.log("Hi");

    break;
}
