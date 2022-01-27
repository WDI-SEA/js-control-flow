/*
Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

**Requirements**
* Your program should maintain two variables
* It should correctly identify which is larger and print that result
*/

function greater(num1, num2) {
  const numOne = Number(num1);
  const numTwo = Number(num2);
  switch (true) {
    case numOne === numTwo:
      alert(
        "The larger number of " +
          num1 +
          " and " +
          num2 +
          " is neither because they are equal :)"
      );
      break;
    case numOne > numTwo:
      alert("The larger number of " + num1 + " and " + num2 + " is " + num1);
      break;
    case numTwo > numOne:
      alert("The larger number of " + num1 + " and " + num2 + " is " + num2);
      break;
  }
}

const varOne = prompt("Enter a number, please.");

const varTwo = prompt("Enter another number, please.");

greater(varOne, varTwo);
