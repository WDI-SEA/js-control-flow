// instantiate Fahrenheit Variables / Array of Variables
var testTemp = 10;
var fahrenheitArray = [32,212,100,0,1.5];

// create function that accepts fahrenheit and outputs temp in celcius to 1 decimal place, for ease of reading
function fahrenheitToCelcius(f) {
    var celcius = (f - 32)*5/9;
    console.log(f.toFixed(1) + ' degrees Fahrenheit is ' + celcius.toFixed(1) + ' degrees Celsius')
}

// call function on testTemp
fahrenheitToCelcius(testTemp);

// iterate over array of fahrenheit temperatures for fun
fahrenheitArray.forEach( function(fahrenheit){
    fahrenheitToCelcius(fahrenheit);
})

