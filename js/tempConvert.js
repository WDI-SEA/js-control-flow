

// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// Requirements

// Your program should store an integer (in Fahrenheit) in a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"



let choice = 'kelvin'
let temp = 84
let k = (5/9) * (temp + 459.67)
let c = (temp - 32) * (5/9)


// console.log(`${temp} degrees Fahrenheit is ${k} degrees Kelvin.`)
// console.log(`${temp} degrees Fahrenheit is ${c} degrees Celcius.`)


if (choice === 'kelvin') {
    console.log(`${temp} degrees Fahrenheit is ${k} degrees Kelvin.`)
} else if (choice === 'celcius')  {
    console.log(`${temp} degrees Fahrenheit is ${c} degrees Celcius.`)
}




