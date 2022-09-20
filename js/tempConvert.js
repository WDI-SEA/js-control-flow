let tempFahrenheit = 113;

//variable to choose Celsius or Kelvin
let tempScale = "c";

//equations that convert from Fahrenheit to Celsius or Kelvin
let fahrToCel = (5/9) * (tempFahrenheit - 32)
let fahrToKel = ( (tempFahrenheit-32) / 1.8) + 273.15

if(tempScale === "c"){
  console.log(tempFahrenheit + " degrees Fahrenheit is " + fahrToCel + " degrees Celsius")
}
else if(tempScale === "k"){
  console.log(tempFahrenheit + " degrees Fahrenheit is " + fahrToKel + " degrees Kelvin")
}
else{
  console.log("Please chosse either k or c to convert the temp!")
}