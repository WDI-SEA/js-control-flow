let fahrenheit = 7
let celcius = 0
let kelvin = 0

let input = 'c'
//for fahrenheit
if(input === 'c'){
  celcius = Math.round((((fahrenheit - 32) * 5) / 9) * 100) / 100 
  console.log(`${fahrenheit} degrees Fahrenheit is ${celcius} degrees in Celcius`)
}else if(input === 'k'){
  kelvin = Math.round(((((fahrenheit -32)*5)/9) + 273.15) * 100) / 100
  console.log(`${fahrenheit} degrees is ${kelvin} degrees in Kelvin`)
}

