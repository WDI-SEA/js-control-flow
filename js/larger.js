let firstNum = 96,
  secondNum = 92,
  // compares the two numbers and returns the appropriate message
  comparison = (message) => {
    if (firstNum < secondNum) {
      return message = "less than";
    } else if (firstNum > secondNum) {
      return message = "greater than";
    } else {
      return message = "equal to";
    }
  };

console.log(`${firstNum} is ${comparison()} ${secondNum}.`);