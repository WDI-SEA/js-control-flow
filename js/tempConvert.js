var tempF = 54;
var temp = "C"
var tempC = ((tempF - 32)*(5/9)).toFixed(0);
var tempK = ((tempF - 32) * (5/9) + 273.15).toFixed(2);
if (temp === "C") {
    console.log(`${tempF} degrees Fahrenheit is ${tempC} degrees Celsius.`);
} else if (temp === "K") {
    console.log(`${tempF} degrees Fahrenheit is ${tempK} degrees Kelvin.`);
}