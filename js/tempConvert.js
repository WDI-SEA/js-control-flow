function changeToF(celsius) {
    var celTemp = celsius;
    var celToFahr = celTemp * 9 / 5 + 32;
    var message = celTemp + 'C' + ' ' + 'is' + ' ' + celToFahr + 'F';
    console.log(message);
}

function changeToC(fahrenheit) {
    var fahTemp = fahrenheit;
    var fahrToCel = (fahTemp - 32) * 5 / 9;
    var message = fahrTemp + 'F' + ' ' + 'is' + ' ' + fahrToCel + 'C';
    console.log(message);
}

