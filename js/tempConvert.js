const Farenheit = 50;

const Celsius = (Farenheit - 32) * 5/9;

const Kelvin = Math.floor(Celsius - 273.15);

console.log(`${Farenheit} degrees Farenheit is ${Celsius} degrees in Celsius and ${Kelvin} degrees in Kelvin`);

