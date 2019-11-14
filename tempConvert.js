var tempInF = 150;
var tempToConvertTo = "k"; //either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively

if (tempToConvertTo === "c") {
    console.log(tempInF + " degrees Farenheit is " + ((tempInF - 32) * (5/9)) + " degrees Celsius.");
} else if (tempToConvertTo == "k") {
    console.log(tempInF + " degrees Farenheit is " + (((tempInF - 32) * (5/9))+ 273.15) + " degrees Kelvin.");
}

