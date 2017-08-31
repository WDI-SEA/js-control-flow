var fTemp = [-50, 0, 22, 55, 90, 105, 115];
// x grados en fahrenheit es y grados en celcius
//fahrenheit-32*(5/9)
for (i=0; i<fTemp.length; i++) {
	var cTemp = (fTemp[i]-32)*(5/9);
	var kTemp = cTemp-273;

	console.log(fTemp[i] + " degrees F is " + cTemp + " degrees C");
	console.log("the temp in k is " + kTemp);
}