//rounded with math.floor - not perfect
let fahrenheit = 3;
let celsius = Math.floor((fahrenheit-32)*.556)
let kelvin = celsius + 273.15
let conversionType = "k"
if(conversionType === "c"){
  console.log(fahrenheit + " degrees fahrenheit equals " + celsius + "degrees celsius")
}else if(conversionType ==="k"){
  console.log(fahrenheit + " degrees fahrenheit equals " + kelvin + "degrees kelvin")
}