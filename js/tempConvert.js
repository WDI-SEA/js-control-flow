var F = 68;
var C = (F - 32) * 5/9;
var K = (F - 32) * 5/9 + 273.15;
var targetTemp = 'k';

if (targetTemp === 'c') {
    console.log(F + " degrees Fahrenheit is " + C + " degrees Celsius")
} else {
    console.log(F + " degrees Fahrenheit is " + K + " degrees Kelvin")
};