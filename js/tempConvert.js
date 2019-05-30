var temp = 65;
var celsius = 'c';
var kelvin = 'k';
var units = kelvin;

if(units === 'c') {
    console.log((temp-32) * (5/9));
} else if (units === 'k') {
    console.log((temp-32) * 5/9 + 273.15);
};
