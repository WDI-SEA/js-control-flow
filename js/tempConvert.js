var tempFahr = 90
var destinationTemp = "k"
var convertedTemp

if (destinationTemp === "k") {
    convertedTemp = Math.floor((tempFahr - 32) * (5/9) + 273.15)
    console.log(`${tempFahr} degrees Fahrenheit is ${convertedTemp} degrees Kelvin`)
} else if (destinationTemp === "c") {
    convertedTemp = Math.floor((tempFahr - 32) * (5/9))
    console.log(`${tempFahr} degrees Fahrenheit is ${convertedTemp} degrees Celcius`)
} else {
    console.log("Sorry, we don't know that temperature.")
}