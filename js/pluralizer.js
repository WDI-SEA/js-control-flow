var pluralize = function (thing, count) {
	if (count > 1) {
		console.log(count + " " + thing + "s");
	}
	else {
		console.log(count + " " + thing);
	}
};