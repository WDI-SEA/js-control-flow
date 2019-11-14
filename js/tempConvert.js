var temp = 95;
var convertedTemp = "k"

if (convertedTemp === "k") {
   kelvin = console.log(temp, "degrees Fahrenheit is", Math.floor((95 - 32) * .55 + 273.15),"degrees Kelvin.")
} else if (convertedTemp === "c") {
    celsius = console.log(temp, "degrees Fahrenheit is", Math.floor((95 -32) * .55),"degrees Celsius.")
} else {
    console.log("The temperature is 95 Fahrenheit.")
}