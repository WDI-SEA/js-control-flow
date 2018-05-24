var tempConverter = function(tempF) {
  var tempC = (tempF - 32) * (5 / 9);
  console.log(tempF.toString() + ' degrees Fahrenheit is ' + tempC.toFixed(1) + ' degrees Celsius.');
};

tempConverter(70);

