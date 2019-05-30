// Write a program that converts a temperature from Fahrenheit to a 
// destination temperature indicated by a variable.

// Requirements

// Your program should take an integer (in Fahrenheit) into a variable.
// You should also have a variable holding either "k" or "c" indicating 
// a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"




var fahrenheit = 50 
var c = (fahrenheit - 32 ) * 5/9;
var k = (fahrenheit + 459.67) * 5/9;
var unit = "k"
 if  (unit === "c") {
  console.log(fahrenheit + " degrees fahrenheit is " + c + " degrees celcius.");
 } else if (unit === "k") { 
  console.log(fahrenheit + " degrees fahrenheit is " + k + " degrees kelvin.")
   console.log()
 }

