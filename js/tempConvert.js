let tempFahren = 50
let selector = 'c'

let kelvin = (tempFahren - 32) * 5/9 + 273
let celsius = kelvin - 273

if(selector === 'K' || selector=== 'k' ){
	console.log(tempFahren + "  degrees Fahrenheit is " + kelvin + " degrees Kelvin") 
}
else if(selector === 'C' || selector === 'c' ){
	console.log(tempFahren + "  degrees Fahrenheit is " + celsius+ " degrees Celsius") 
}
else {
	console.log("Please enter a valid selector")
}
