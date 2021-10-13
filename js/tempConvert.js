const tempF = 3
const tempUnit = 'k'

switch(tempUnit){
  case 'c':
    console.log(tempF+' degrees Fahrenheit is '+
      Math.round((tempF-32)*5/9*10)/10
      +' degrees Celcius')
    break
  case 'k':
    console.log(tempF+' degrees Fahrenheit is '+
      Math.round(((tempF-32)*5/9 + 273.15)*10)/10
      +' Kelvin')
    break
  default:
    console.log('SFY')
  break
}
