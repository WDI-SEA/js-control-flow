// Declare temperatures
let F = 72,
  C = Math.round((F - 32) * 5/9),
  K = Math.round((F - 32) * 5/9 + 273.15);

// Convert number to its respective temperatures in a template literal
console.log(`${F}°F / ${C}°C / ${K}°K.`);