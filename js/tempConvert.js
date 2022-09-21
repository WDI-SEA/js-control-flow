/*
Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

Requirements

Your program should store an integer (in Fahrenheit) in a variable.
You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
Convert from F to C or K based on the indicator variable.
The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

*/

let tempFahrenheit = 50;

let tempConverted = "c";

let newDegreeValue = 0;

if ( !(tempConverted === "k" || tempConverted === "c") ) {
    console.log("Invalid Degrees");
} else if (tempConverted == "c"){

    newDegreeValue = (tempFahrenheit - 32) * 5/9;
    console.log(tempFahrenheit + " degrees Fahrenheit is "+ newDegreeValue  + " degrees Celsius");

} else if (tempConverted == "k"){

    newDegreeValue = (tempFahrenheit - 32) * 5/9 + 273.15
    console.log(tempFahrenheit + " degrees Fahrenheit is "+ newDegreeValue + " degrees Kelvin");
} 


