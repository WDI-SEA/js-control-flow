//rounded with math.floor - not perfect
let tempInF = 3;
let conversionType = "k"

function tempConverter(fahrenheit,conversionType){
  let celsius = Math.floor((fahrenheit-32)*.556)
  let kelvin = celsius + 273.15
  if(conversionType === "c"){
    console.log(fahrenheit + " degrees fahrenheit equals " + celsius + "degrees celsius")
  }else if(conversionType ==="k"){
    console.log(fahrenheit + " degrees fahrenheit equals " + kelvin + "degrees kelvin")
  }
}
tempConverter(tempInF,conversionType)