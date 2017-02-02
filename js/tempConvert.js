console.log(fTemp + " degree Fahrenheit is " + fToC(fTemp).toFixed(2) + " degrees Celsius");
var fToC = function(f) {
  return (f -32) * 5 /9;
};
var fTemp = 78;
console.log(fTemp + " degree Fahrenheit is " + fToC(fTemp).toFixed(2) + " degrees Celsius");
fTemp = 23;
console.log(fTemp + " degree Fahrenheit is " + fToC(fTemp).toFixed(2) + " degrees Celsius");
fTemp = 32;
