
function tempConvert (temp, units) {
    if (units === 'k') {
        console.log((temp+457.67) * 5/9)
    } else {
        console.log((temp-32)*5/9)
    }
}

tempConvert(45, 'k');
