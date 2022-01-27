function tempConvert(temp, unit) {
    if ((unit === 'fahrenheit') || (unit === 'f')) {
      celsiusNum = (temp - 32) * (5/9);
      console.log(temp + ' degrees in fahrenheit is ' + celsiusNum + ' in celsius/kelvin.')  
    } else {
      fahrenheitNum = (temp * (9/5) + 32);
      console.log(temp + ' degrees in kelvin/celsius is ' + fahrenheitNum + ' in fahrenheit.')
    }
}

tempConvert(32, 'f')