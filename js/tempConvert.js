// Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.

// Requirements

// Your program should take an integer (in Fahrenheit) into a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

var f = 58
var celsius = ((f-32) * 5/9)
var units = "c"

var result = 0;

if (units === "k") {
    result = celsius + 273.15
    console.log()
} else {
    result = celsius
    console.log(f + " degrees Fahrenheit is " + celsius + " degrees Celsius" )
}








