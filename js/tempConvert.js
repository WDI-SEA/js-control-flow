let fahrenheit = 80;
let kelvin = 0;
let celsius = 0;

const celsiusConversion = () => {
// fahrenheit = celsius * (5/9) - 32;
celsius = (fahrenheit - 32) * 5/9
return celsius
}
const kelvinConversion = () => {
kelvin = (fahrenheit - 32) * (5/9) + 273.15;

return kelvin
}

celsiusConversion();
kelvinConversion();
console.log(`${fahrenheit} degrees Fahrenheit is ${celsius} celsius and ${kelvin} kelvin`)