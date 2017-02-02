function pluralizer(thing, count) {

	var result;

	if (count > 1) {
	    result = count + ' ' + thing + "s";
	} else if (count == 1) {
	  	result = count + ' ' + thing;
	} else {
	  	result = "Wrong input: " + count + ' ' + thing + "(s)";
	}

	return result;
}

console.log(pluralizer('cat', 5));
console.log(pluralizer('dog', 3));
console.log(pluralizer('rat', -3));