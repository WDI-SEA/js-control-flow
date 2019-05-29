function Larger(num1, num2) {
    if (num1 === num2) {
        console.log(num1 + " equals " + num2);
    } else if (num1 > num2) {
        console.log("The larger number of " + num1 + " and " 
        + num2 + " is " + num1);
    } else {
        console.log("The larger number of " + num1 + " and " 
        + num2 + " is " + num2);
    }
}

Larger(0, 100);
Larger(100, 0);
Larger(0, 0);
