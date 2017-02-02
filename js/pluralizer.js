var cat = "cat";
var number = 5;

function pluralizer(thing, count) {
	if (count > 1) {
		console.log(thing + "s: " + count);
	}

else {
	console.log(thing + ": " + count);
}

}

pluralizer(cat, number);