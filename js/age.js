let age = 13;

if (age === 1) {
  console.log("infant");
} else if (age > 1 && age <= 3) {
  console.log("todler");
} else if (age > 3 && age <= 8) {
  console.log("child");
} else if (age >= 9 && age <= 12) {
  console.log("preteen");
} else if (age >= 13 && age <= 18) {
  console.log("teen");
} else if (age > 18 && age <= 20) {
  console.log("young adult");
}

// Bonus
let expr = 5;
switch (expr) {
  case 1:
    console.log("infant");
    break;
  case 2:
    console.log("todler");
    break;
  case 3:
    console.log("todler");
    break;
  case 4:
    console.log("child");
    break;
  case 5:
    console.log("child");
    break;
  case 6:
    console.log("child");
    break;
  case 7:
    console.log("child");
    break;
  case 8:
    console.log("child");
    break;
  case 9:
    console.log("preteen");
    break;
  case 10:
    console.log("preteen");
    break;
  case 11:
    console.log("preteen");
    break;
  case 12:
    console.log("preteen");
    break;
  case 13:
    console.log("teen");
    break;
  case 14:
    console.log("teen");
    break;
  case 15:
    console.log("teen");
    break;
  case 16:
    console.log("teen");
    break;
  case 17:
    console.log("teen");
    break;
  case 18:
    console.log("teen");
    break;
  case 19:
    console.log("young adult");
    break;
  case 12:
    console.log("young adult");
    break;
  default:
    console.log("Too old");
}
