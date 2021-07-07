var tempF = Math.floor(Math.random() * 1000);
var tempC = (tempF - 32) * (5/9)
var tempK = (tempF - 32) * (5/9) + 273.15

var conversionTemp = "k"

if (conversionTemp === "c") {
    console.log(tempF, "degrees Farenheit is equal to", tempC, "degrees Celsius.");
}
else {
    console.log(tempF, "degrees Farenheit is equal to", tempK, "degrees Kelvin.");
}