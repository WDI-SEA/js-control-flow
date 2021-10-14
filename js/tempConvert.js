// pseudocode temp conversion
// indicator ---> tells if c or k
// temp in f ---> number
// find the conversion from f to c and from f to k

const Fahrenheit = 32
// c = 0 k = 273.15
const indicator = "k"

// convert to celcius
const celcius = (Fahrenheit - 32) * 5/9
// convert to kelvin
const kelvin = (Fahrenheit -32) * 5/9 + 273.15

switch(indicator) {
    case "k":
        console.log("f to k is: " + kelvin)
        break
    case "c"
        console.log("f to c is: " + celcius)
        break
    default:
        console.log("incorrect indicator")
        break
}




let tempF = 100
let tempC = Math.floor((tempF - 32) * (5/9))
  console.log (tempF + " degrees Fahrenheit " + "is " + tempC + " degrees Celcius")
