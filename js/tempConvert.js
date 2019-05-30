// if else statement 
var ftemps = 100;

var conversionType = "K"; 

if (conversionType === "C") {

    fToC(ftemps); 
   // var convertTemp = converst F to K ; 
    //console.log(convertTemp); 

} else if (conversionType === "K") {
    fToK(ftemps);
}

else {
    console.log("I don't understand why this is happening"); 
}


function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

function fToK(fahrenheit) 
{
    fahrenheit = parseFloat(fahrenheit); 
    var ftoK = ((fahrenheit-32)/1.8)+273.15;
    var message = fahrenheit+'\xB0F is ' + ftoK + '\xB0K.';
    console.log(message); 

}