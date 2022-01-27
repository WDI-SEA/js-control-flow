const age = 0
switch (true) {
  case (age > 0 && age < 3):
    console.log("infant");
    break;
  case (age >= 3 && age < 5):
    console.log("toddler");
    break;
  case (age >= 5 && age < 10):
    console.log("child");
    break;
  case (age >= 10 && age < 13):
    console.log("preteen");
    break;
  case (age >= 13 && age < 20):
    console.log("teen");
    break;
  case (age === 20):
    console.log("young adult");
    break;
  default:
    console.log("age is outside of accepted range")
}