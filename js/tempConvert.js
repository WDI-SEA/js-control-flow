// Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.
// Your program should take an integer (in Fahrenheit) into a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

var temperature = 50;
var targetTemp = "c";

if (targetTemp === "c") {
    var celsius = (temperature - 32) * (5/9);
    console.log(temperature + " degress Farenheit is " + celsius + " degrees Celsius")
} else if (targetTemp === "k") {
    var kelvin = (temperature - 32) * (5/9) + 273.15;
    console.log(temperature + " degress Farenheit is " + kelvin + " degrees Kelvin")
} else {
    console.log("can't convert that")
}