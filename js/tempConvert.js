let temp = 1;
let targetUnit = 'c';

//The formula allows upper or lower case targetUnit values.
//The responses are rounded to the nearest tenth of a degree.
switch(targetUnit) {
  case 'c':
  case 'C':
    console.log(`${temp}°F is about ${Math.round((temp - 32) * 5 / 9*10)/10}°C.`)
    break
  case 'k':
  case 'K':
    console.log(`${temp}°F is about ${Math.round(((temp - 32) * 5 / 9 + 273.15)*10)/10}K.`)
    break
}