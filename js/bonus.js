switch (grade = Math.random() * 100) {
    case grade > 90:
        console.log("Congratulations you got an A!");
        break;
    case grade > 80:
        console.log("You got a B.");
        break;
    case grade > 70:
        console.log("You got a C.");
        break;
    case grade > 60:
        console.log("You got a D.");
        break;
    case grade <= 59:
        console.log("You got an F.");
}
