tempConvert.js
/*Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.

Requirements

Your program should take an integer (in Fahrenheit) into a variable.
You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
Convert from F to C or K based on the indicator variable.
The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"
*/

var tempFarh = Math.round(Math.random() * 100)
var tempCelsius = Math.round((tempFarh - 32) * (5/9))
var tempKelvin = Math.round((tempCelsius) + 273.15)

var destination = "k"

if (destination === "k") {
	console.log (tempFarh, "degrees Fahrenheit is", tempKelvin, "degrees Kelvin")
}
else {
	console.log (tempFarh, "degrees Fahrenheit is", tempCelsius, "degrees Celsius")
}