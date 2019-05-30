/* tempConvert.js
Write a program that converts a temperature from Fahrenheit to a destination temperature 
indicated by a variable.

Requirements

Your program should take an integer (in Fahrenheit) into a variable.
You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin 
or Celsius, respectively.
Convert from F to C or K based on the indicator variable.
The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin" */

var fahrenheit = 98;
var unit = "K";
var celsiusRate = fahrenheit * 1.8 + 32;
var kelvinRate = (fahrenheit + 459.67)*(5/9);

if (unit === "C") {
   console.log(fahrenheit + " degrees Fahrenheit is " + celsiusRate + " degrees Celsius");
} else if (unit === "K") {
    console.log(fahrenheit + " degrees Fahrenheit is " + kelvinRate + " degrees Kelvin");
} else {
    console.log("Invalid temp")
}

