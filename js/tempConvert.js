var tempConvert = function (fahrenheit) {
	var result = (fahrenheit - 32) * 5/9;
	console.log(fahrenheit + " " +  "degrees Fahrenheit is ~ " + Math.round(result) + " " + "degrees Celsius");
};