var grade = 94;
switch (true) {
    case (grade >= 90 && grade <= 100):
        console.log("Your grade is an A");
        break;
    case (grade >= 80 && grade < 90):
        console.log("Your grade is a B");
        break;
    case (grade >= 70 && grade < 80):
        console.log("Your grade is a C");
        break;
    case (grade >= 60 && grade < 70):
        console.log("Your grade is an D");
        break;
      default:
        console.log("Your grade is an f");
};


