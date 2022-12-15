// Fahrenheit converter enter C for Celcius or K for Kelvin to see the conversion in the let conversion
let F = 30
let C = (F - 32) * 0.55
let K = ((F - 32) / 1.8) + 273.15
let conversion = C

// the code block looks at which conversion you want and displays the results
if (conversion === C) {
    console.log(`${F}° fahrenheit = ${C}° Celcius`)
}else if (conversion === K){
    console.log(`${F}° Fahrenheit = ${K}° Kelvin`)
}else {
    console.log(`You did not enter a correct Temperature Converter`)
}
