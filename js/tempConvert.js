// Write a program that converts a temperature from Fahrenheit to a destination temperature indicated by a variable.

// **Requirements**
// * Your program should take an integer (in Fahrenheit) into a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"

function convertTemp(farenheit, unit) {
    let temperature;
    let units = 'Celsius';
    temperature = (5/9) * farenheit;
    if (unit === 'k' || unit === 'K') {
        // convert to Kelvin
        temperature += 273.15;
        units = 'Kelvin';
    }
    return `${farenheit} degrees Farenheit is ${Math.round(temperature)} degrees ${units}`
}
let temp = 55
let unit = 'c'
console.log(convertTemp(temp, unit));