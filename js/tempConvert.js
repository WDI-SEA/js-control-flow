
var tempF = 80;

var indicator = 'Fahrenheit';

if (indicator === 'Celcius') {
   var tempC = (tempF - 32) * 5/9
    console.log(tempF + ' degrees Fahrenheit is ' + tempC + ' degrees Celcius.')
} else if (indicator === 'Fahrenheit') {
    var tempK = tempF + 273.15
    console.log(tempF + ' degrees Fahrenheit is ' + tempK + ' degrees Kelvin.')
} else {
    console.log('Input is not valid');
}