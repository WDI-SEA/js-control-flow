var number1 = Math.random() * 100;
var number2 = Math.random() * 100;

if ((number1 - number2) > 0) {
    console.log("The larger number between", number1, "and", number2, "is", number1, ".")
}

else if ((number1 - number2) < 0) {
    console.log("The larger number between", number1, "and", number2, "is", number2, ".")
}

else {
    console.log(number1, "is the same number as", number2, ".")
}

