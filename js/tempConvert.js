const Fh = 100
const unit = 'c'

if (unit === 'c'){
  console.log (Fh + " degrees Fahrenheit is " + ((Fh - 32) * 0.5556) + 
  " degrees Celsius")
}
else if (unit === 'k'){
  console.log (Fh + " degrees Fahrenheit is " + (((Fh - 32) * 0.5556) + 273.15) + 
  " degrees Kelvin")
}

else {
  console.log("outofparameter")
}