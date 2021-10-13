let temp = 72
let ind = "k"
let kelvin = (temp-32)/1.8 + 273.15
let celsius = .5556 * (temp - 32)

if (ind == "k") {
  console.log(temp + " degrees Fahrenheit is " + Math.round(kelvin) + " degrees Kelvin")
} else if (ind == "c") {
  console.log(temp + " degrees Fahrenheit is " + Math.round(celsius) + " degrees Celsius")
} else {
  console.log("Oops! make sure to assign 'c' or 'k' to the ind variable to begin the conversion process.")
}