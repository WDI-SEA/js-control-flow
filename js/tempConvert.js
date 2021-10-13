const temp = Math.floor(Math.random()*100)

const tempConverTo = "c"

if (tempConverTo === 'c') {
    tempC = (temp -32) * (5/8)

    console.log(temp,' degrees Fahrenheit is ',tempC,'degrees Celsius')
}
else {
    tempK = (temp - 32) * (5/8) + 273.15

    console.log(temp,' degrees Fahrenheit is ',tempK,'degrees Kelvin')
}