let fahrenheit = null;
let convertTo = null;

function tempConvert (fahrenheit, convertTo) {
  if (convertTo === 'k') {
    let kelvin = ((fahrenheit - 32)*(5/9) + 273.15)
    console.log(fahrenheit + ' degrees Fahrenheit is ' + kelvin + ' degrees Kelvin')
  } else if (convertTo === 'c') { 
    let celsius = ((fahrenheit - 32)*(5/9))
    console.log(fahrenheit + ' degrees Fahrenheit is ' + celsius + ' degrees Celsius')
  } else {
    console.log('Please indicate "c" or "k" for the 2nd variable')
  }
}

tempConvert (32,'c')