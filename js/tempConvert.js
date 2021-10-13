/* tempConvert.js
Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

Requirements

Your program should store an integer (in Fahrenheit) in a variable.
You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
Convert from F to C or K based on the indicator variable.
The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin" 

F -> C (32°F − 32) × 5/9 = 0°C
F -> K (32°F − 32) × 5/9 + 273.15 = 273.15K




*/


/* F --> C OR K */

let fahrenheit = 99;
let userChoice = "K"


if (userChoice == "C") {
    let celsius = Math.round((fahrenheit - 32) * (5/9))
    console.log(`${fahrenheit} degrees fahrenheit is ${celsius} degrees Celsius.`)

} else if (userChoice == "K") {
    let kelvin = Math.round((fahrenheit - 32) * (5/9) + 273.15)
    console.log(`${fahrenheit} degrees fahrenheit is ${kelvin} degrees Kelvin.`)

} else {
    console.log("You did not indicate whether you wanted to convert to Celsius or Kelvin.")
}


/* SWITCH VERSION */

switch(userChoice){
    case "C":
        let celsius = Math.round((fahrenheit - 32) * (5/9))
        console.log(`${fahrenheit} degrees fahrenheit is ${celsius} degrees Celsius.`)
        break;
    case "K":
        let kelvin = Math.round((fahrenheit - 32) * (5/9) + 273.15)
        console.log(`${fahrenheit} degrees fahrenheit is ${kelvin} degrees Kelvin.`)
        break;
}