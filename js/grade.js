// Generate a random number between 1 - 100 and store it in a variable called 'grade'
let grade = Math.round(Math.random() * 100);

// Check grade
switch (true) {
  case grade >= 90:
    console.log(`${grade} A`);
    break;
  case grade >= 80:
    console.log(`${grade} B`);
    break;
  case grade >= 70:
    console.log(`${grade} C`);
    break;
  case grade >= 60:
    console.log(`${grade} D`);
    break;
  case grade <= 59:
    console.log(`${grade} F`);
}