/*
Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

**Requirements**
* Your program should store an integer (in Fahrenheit) in a variable.
* You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
* Convert from F to C or K based on the indicator variable.
* The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"
*/

function tempConvert(temp, units) {
  /*
    The basic formula is °C + 273.15 = K. The basic formula for converting Fahrenheit into Celsius is (°F − 32) × 5/9 = °C. To convert Fahrenheit degrees into Kelvins, (°F − 32) × 5/9 + 273.15 = K. */
  if (units === "k" || units === "K") {
    const newTemp = (temp - 32) * (5 / 9) + 273.15;
    console.log(`${temp} degrees Farenheit is ${newTemp} Kelvin`);
  } else if (units === "c" || units === "C") {
    const newTemp = ((temp - 32) * 5) / 9;
    console.log(`${temp} degrees Farenheit is ${newTemp} Celsius`);
  }
}

userTemp = Number(prompt("What is the temperature in Fahrenheit?"));

userUnit = prompt(
  "What unit do you want to convert to? K or k for Kelvin. C or c for Celsius."
);

tempConvert(userTemp, userUnit);
