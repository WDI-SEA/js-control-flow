// Arrow functions
const fahToCel = (f) => {
  const c = Math.round(((f - 32) * 5) / 9);
  console.log(`${f} degrees in Fahrenheit is ${c} degrees Celsius/Kelvin`);
};
fahToCel(108);

const celToFah = (c) => {
  const f = Math.round((c / 5) * 9 + 32);
  console.log(`${c} degrees in Celsius/Kelvin is ${f} in Fahrenheit`);
};
celToFah(42);
