// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// Requirements

// Your program should store an integer (in Fahrenheit) in a variable.
// You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// Convert from F to C or K based on the indicator variable.
// The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"


// let newUnit = Math.round(Math.random())
// console.log("newUnit is " + newUnit)

// if (newUnit === 0) {
//   let celcius = 5/9 x (f-32)


//   console.log(f + " degrees Fahrenheit is " + celcius + " degress Celcius")
// } else if (newUnit === 1) {
//   let kelvin

//   console.log(f + " degrees Fahrenheit is " + kelvin + " degress Kelvin.")
// }

const f = Math.floor(Math.random()*100)

let newUnit = Math.round(Math.random())
  if (newUnit === 0) {
    newUnit = "c"
  } else if (newUnit === 1) {
    newUnit = "k"
  }

switch(newUnit) {
  case "c": 
    let celcius = Math.round(5/9 * (f-32))
    console.log(f + " degrees Fahrenheit is " + celcius + " degress Celcius")
    break;
  case "k":
    let kelvin = Math.round((f + 459.67) * 5/9)
    console.log(f + " degrees Fahrenheit is " + kelvin + " degress Kelvin.")
    break;
}