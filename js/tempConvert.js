let fahrenheit = 32 
let celsius = 0
let tempchng = (fahrenheit - 32) * .5556
let tempConvt = `${fahrenheit} degrees Fahrenheit is equal to ${Math.round(tempchng * 10)/10} degrees celcius`
console.log(tempConvt)