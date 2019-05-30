//program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.
//Your program should take an integer (in Fahrenheit) into a variable.
//You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
//Convert from F to C or K based on the indicator variable.
//The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

var f = 80;
var unit = "c";

if (unit === "c") {
    var c = (f - 32) * 5/9;
    console.log(f + " degrees Fahrenheit is" + " " + c + " degrees Celcius");
} else {
    var k = (f + 460) * 5/9;
    console.log(f + " degrees Fahrenheit is" + " " + k + " degrees Kelvin");
}


