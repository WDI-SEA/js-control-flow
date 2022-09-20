var F = 77
var K = (F - 32) * (5 / 9) + 273.15
var C = (F - 32) * 5 / 9
const temp = ["K", "C"]

for (let i=0; i<=temp.length-1; i++) {
  if (temp[i]=="K") {
    console.log(F + " degrees Fahrenheit is " + K + " degrees Kelvin")
  } else {
    console.log(F + " degrees Fahrenheit is " + C + " degrees Celsius")
  }
}