// Write a program that converts a temperature from Fahrenheit to Celsius.
//
// Requirements
//
// Your program should take an integer (in Fahrenheit) and convert the temperature to Celsius.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius"

function farenheitToCelsius(temp) {
  // Equation = Deduct 32, then multiply by 5, then divide by 9
  var celsius = ((temp - 32)*5)/9;
  var result = temp + " degrees Fahrenheit is " + celsius.toFixed(2) + " degrees Celsius";
  return result;
}

console.log(farenheitToCelsius(70)); //21.11
console.log(farenheitToCelsius(50)); //10
console.log(farenheitToCelsius(40)); //4.44
console.log(farenheitToCelsius(32)); //0
