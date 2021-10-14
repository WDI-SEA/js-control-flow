let c;
let f;

let tempConvertC = (num) => {
  c = ((num - 32) * 5) / 9;
  console.log(`${c} Celsius`);
};

let tempConvertF = (num) => {
  f = (num * 9) / 5 + 32;
  console.log(`${f} Fahrenheit`);
};

// Please enter your temper in Celsius to convert to Fahrenheit in () below
tempConvertF(37);
// Please enter your temperature in Fahrenheit to convert to Celsius in () below
tempConvertC(98.6);
