
// ### tempConvert.js
// Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.

// **Requirements**
// * Your program should take an integer (in Fahrenheit) into a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

// (32°F − 32) × 5/9 = 0°C
// (32°F − 32) × 5/9 + 273.15 = 273.15K


var celOrKel = 'k'
var fTemp = 0;
var convTempC;

convTempC = (fTemp - 32) * (5/9);

if (celOrKel === 'k') {
    //convTempK = convTempC + 273.15;
    console.log(fTemp + "F = " + (convTempC + 273.15) + " degrees K");
}
else {
    console.log(fTemp + "F = " + convTempC + " degrees C");
}