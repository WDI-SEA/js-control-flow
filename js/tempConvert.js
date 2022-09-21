let temp = 770;
const unit = 'k';

if (unit === 'c') {
  let new_temp = 5 / 9 * (temp - 32);
  console.log(temp + ' degrees Fahrenheit is ' + new_temp + ' degrees Celsius');
} else {
  let new_temp = temp - 273.15;
  console.log(temp + ' degrees Fahrenheit is '+ new_temp + ' degrees Celsius');
}
