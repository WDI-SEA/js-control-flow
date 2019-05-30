
var degreeF = 78;
var degreeC = 25;
var unitOfMeasur = "Fahrenheit"
if(unitOfMeasur === "Fahrenheit"){
    var tem = 5/9 * (degreeF-32);
    console.log(degreeF + ' degrees Fahrenheit is ' +tem + ' degrees Celsius');
}else{
    var temp = (degreeC * 9/5) + 32;
    console.log(degreeC + ' degrees Celsius is ' +temp + ' degrees Fahrenhiet');
    console.log("")
}
