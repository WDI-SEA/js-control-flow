
var fTemp=67;
var temp = "C";
var celcius = ((fTemp - 32)*(5/9)).toFixed(0); 
var kelvin = (((fTemp - 32)*(5/9))+273.15).toFixed(2);


if(temp==="C"){
    console.log(`${fTemp} degrees Fahrenheight is ${celcius} degrees Celcius`);
} else{
    console.log(`${fTemp} degrees Fahrenhegith is ${kelvin} degrees Kelvin`);
}









