/*
tempConvert.js
Write a program that converts a temperature from 
Fahrenheit to a destination temperature indicated 
by a variable.

Requirements

Your program should take an integer (in Fahrenheit) 
into a variable.
You should also have a variable holding either 
"k" or "c" indicating a conversion to Kelvin or Celsius, 
respectively.
Convert from F to C or K based on the indicator variable.

The output of the program should read: "X degrees 
Fahrenheit is Y degrees Celsius/Kelvin"
*/

function fahrenheitTo(f){
    console.log(f + " degrees Fahrenheit");
    f = (f - 32) * 5/9;
    console.log("equals " + f + " degrees Celsius");
    f = f + 273.15;
    console.log("equals "+ f + " degrees Kelvin");
  }
  fahrenheitTo(95);

// use if else


