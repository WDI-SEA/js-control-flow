let tempF = 98.6
let newTemp = "k" 
if(newTemp === "k") {
  console.log(tempF+" degrees Fahrenheit is "+((tempF-32)*5/9+273.15)+" degrees Kelvin")
} else if(newTemp === "c") {
  console.log(tempF+" degrees Fahrenheit is "+((tempF-32)*5/9)+" degrees Celsius")
} else {
  console.log("Not an accepted unit of temperature")
}