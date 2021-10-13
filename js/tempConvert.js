// let tempFah = 41
let tempFah = Math.floor(Math.random()*100)

let convertFtoC = Math.floor(((tempFah-32)*5)/9)

let convertFtoK = Math.floor(((tempFah-32)*5)/9) + 273.15

// console.log(convertFtoC)

console.log(tempFah + " degress Fahrenheit is " + convertFtoC + " degrees Celsius and " + convertFtoK + " Kelvin")

// console.log(tempFah + " degress Fahrenheit is " + convertFtoK + " degrees Kelvin")