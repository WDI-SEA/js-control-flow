const num1 = 90;
const num2 = 2;

if (num1 > num2) {
  console.log(`The larger number of ${num1} and ${num2} is ${num1}.`)
} else if (num1 < num2) {
  console.log(`The larger number of ${num1} and ${num2} is ${num2}.`)
} else if (num1 === num2) {
   console.log('The provided numbers are equal.')
} else {
  console.log('Entry invalid.')
}