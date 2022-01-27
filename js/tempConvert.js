// function + return practice

function fToC(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
}

function fToK(fahrenheit) {
  return (fToC(fahrenheit) + 273.15)
}


// fahrenheit of 60
let celsius = fToC(60);
// fahrenheit of 20
let kelvin = fToK(20);

console.log(celsius)
console.log(kelvin)

