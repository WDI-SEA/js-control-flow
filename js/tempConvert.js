// Write a program that converts a temperature from Fahrenheit to Celsius.

// Requirements

// Your program should take an integer (in Fahrenheit) and convert the temperature to Celsius.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius"


function cToF(temp) {
  var tempC = Math.floor((temp - 32) / 1.8);
  console.log(temp + " degrees Fahrenheit is " + tempC + " degrees Celsius");
}