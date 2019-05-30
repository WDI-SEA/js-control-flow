var fTemp = 80;
var unit = 'K'; 
var temp;
if (unit === 'C'){
    temp = (fTemp-32)/1.8;
    console.log(fTemp + " degrees Fahrenheit is " + temp + " degrees Celsius");
}
else{
    temp = ((fTemp-32)/1.8) + 273.15;
    console.log(fTemp + " degrees Fahrenheit is " + temp + " degrees Kelvin");
}