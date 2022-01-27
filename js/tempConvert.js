let fahrenheit = 0
let celsius = 0
let kelvin = 0

const readline = require('readline-sync')
fahrenheit = readline.question(`Enter temperature in F :\n`)

celsius = (fahrenheit - 32) * 5/9
kelvin = (fahrenheit + 459.67) * 5/9
console.log(fahrenheit + 'F is ' + celsius.toFixed(0) + 'C')
console.log(fahrenheit + 'F is ' + kelvin.toFixed(0) + 'K')
