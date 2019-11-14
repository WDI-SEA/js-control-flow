var tempInF = 150;
var tempToConvertTo = "c"; //either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively

if (tempToConvertTo === "c") {
    console.log(tempInF + "°F is " + (((tempInF - 32) * (5/9))).toFixed(2) + "°C.");
} else if (tempToConvertTo == "k") {
    console.log(tempInF + "°F is " + ((((tempInF - 32) * (5/9))+ 273.15)).toFixed(2) + " Kelvins.");
} else {
    console.log("Enter a valid temperature unit to convert to!");
}

