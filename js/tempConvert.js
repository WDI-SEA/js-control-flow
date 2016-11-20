// Write a program that converts a temperature from Fahrenheit to Celsius.

// Requirements

// Your program should take an integer (in Fahrenheit) and convert the temperature to Celsius.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius"



function fToC(fahrenheit) {
  var celcius = Math.floor((fahrenheit - 32) / 1.8);
  console.log(fahrenheit + " degrees Fahrenheit is " + celcius + " degrees Celsius");
}
fToC(32);