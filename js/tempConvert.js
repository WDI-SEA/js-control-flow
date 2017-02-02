
var f = 85;
var toC = function(){
 var c = Math.round((f - 32) * (5/9));
 return c;
};
var c = toC();
console.log(f + " degrees Fahrenheit is " + c + " degrees Celsius");
