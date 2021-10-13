let temp = 75

let convertTo = 'c'
let tempCel = Math.floor((temp - 32) * (5/9))

if (convertTo === 'k') {
    let tempKelv = Math.floor(tempCel + 273.15)
    console.log(temp + ' degrees Fahrenheit is ' + tempKelv + ' degrees Kelvin.')
} else {
    console.log(temp + ' degrees Fahrenheit is ' + tempCel + ' degrees Celsius.')
}