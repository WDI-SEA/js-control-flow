let int, fahrenheitTemperature = 20;

let degreeIndicator = 'C';

// Fahrenheit to Celsius using the following formulla

let celsius = (fahrenheitTemperature - 32) / 1.8

// Fahrenheit to Kelvin using the following formulla

let kelvin = ((fahrenheitTemperature - 32) / 1.8) + 273.15

switch (true) {

    case (degreeIndicator.toUpperCase() === 'K'):
        console.log(fahrenheitTemperature + "  Degrees fahrenheit is " + kelvin + " degrees kelvin");
        break;
    case (degreeIndicator.toUpperCase() === 'C'):
        console.log(fahrenheitTemperature + "  Degrees fahrenheit is " + celsius + " degrees celsius");
        break;

    default:
        console.log("Invalid Degree Indicator!!");
}