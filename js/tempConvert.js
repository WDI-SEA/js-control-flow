let farenheit = 'F';
let celsius = 'C';
let kelvin = 'K';
let temp = prompt("Enter a temperature: ");
let string = prompt("Enter which unit do you want F, C, K: ");

if(string == 'F') {
  console.log(temp + ' ' + farenheit);
}else if (string == 'C') {
  temp = (temp - 32) * (5/9);
  console.log(temp + ' ' + celsius);
}else if (string == 'K'){
   temp = (temp - 32) * (5/9) + 273.15
  console.log(temp + ' ' + kelvin);
}