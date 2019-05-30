// Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.

// Requirements

// Your program should take an integer (in Fahrenheit) into a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"
// Convert F to K = (32°F − 32) × 5/9 + 273.15 = 273.15K
// Convert F to C = (32°F − 32) × 5/9 = 0°C

var fahrenheit = 68;
var temp = 'c';
var newTemp = 0;

if (temp === 'k') {
    newTemp = (fahrenheit - 32) * 5/9 + 273.15;
    console.log(fahrenheit + " degrees Fahrenheit is " + newTemp + " degrees Kelvin");
} else {
    newTemp = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + " degrees Fahrenheit is " + newTemp + " degrees Celsius");
}