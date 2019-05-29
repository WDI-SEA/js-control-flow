var Fahren = 90;

function fahrenConverter(Fahren, degree) {
    if (degree.toLowerCase() === 'c') {
        console.log(Fahren + "degrees Fahrenheit is " + 
        ((Fahren-32)*5/9).toFixed(2) + " degrees Celsius");
    } else if (degree.toLowerCase() === 'k'){
        console.log(Fahren + "degrees Fahrenheit is " + 
        ((Fahren-32)*5/9+273.15).toFixed(2) + " degrees Kelvin");
    }
}

fahrenConverter(Fahren, 'c');
fahrenConverter(Fahren, 'k');
fahrenConverter(40, 'c');
fahrenConverter(-20, 'c');