let fahrenheit = 32
let celsius = (fahrenheit - 32) * (5/9)
let kelvin = (fahrenheit - 32) * (5/9) + 273.15

let preferredConversion = kelvin

if (preferredConversion === celsius) {
  console.log(fahrenheit + " degrees Fatrenheit is " + celsius + " degrees Celsius")
} else if (preferredConversion === kelvin) {
  console.log(fahrenheit + " degrees Fatrenheit is " + kelvin + " degrees Kelvin")
}
