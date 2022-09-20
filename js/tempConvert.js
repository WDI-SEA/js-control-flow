//Temp convertor --> cause the world can never agree on just one unit :)

//Anyways,

//Fahrenheit (the one I dont really get)
let F=100

//To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9). --> according to google

//used toFixed(x) to get it two decimal since I got long decimals in the result
let C= ((F-32)*(5/9)).toFixed(2)

/* F to K:
Subtract 32 from the Fahrenheit temperature.
Multiply this number by 5.
Divide this number by 9.
Add 273.15 to this number.
  */
let K= ((((F-32)*5)/9)+273.15).toFixed(2)

console.log(F+' degrees Fahrenheit is '+C+' degrees in Celsius and is '+K+' in Kelvin')
