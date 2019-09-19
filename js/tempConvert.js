const f = 45;
const unit = "k"

//(32°F − 32) × 5/9 = 0°C
var conversion;
var unitName;
if (unit === "c"){
    conversion = (f - 32)* (5/9)
    unitName = "Celcius"
}
else if(unit==="k"){
    conversion = (f - 32)* (5/9) + 273.15
    unitName = "Kelvin";
}

//(32°F − 32) × 5/9 + 273.15 = 273.15K

console.log(f + " degrees Fahrenheit is " + conversion+ " degrees " + unitName)
