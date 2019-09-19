
// Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.

// Requirements

// Your program should take an integer (in Fahrenheit) into a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

var degreesFahrenheit = 70
var degreesCelsius = ((5/9) * (degreesFahrenheit - 32)).toFixed(0)
console.log(degreesCelsius)
var degreesKelvin = ((5/9) * (degreesFahrenheit - 32) + 273.15).toFixed(2)
console.log(degreesKelvin)

if (degreesFahrenheit) {
    console.log(`${degreesFahrenheit} degrees Fahrenheit is ${degreesCelsius} degrees Celsius/${degreesKelvin} Kelvin`)
} else {
    console.log('No number yet')
}