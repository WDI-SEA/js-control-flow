var noun = ["diggity", "flower", "beer", "coche", "huzzah"];
var count = [1, 4, 23, 3, 1];

//take in the noun, either keep is singular or make it plural
// if the number of count is 1, keep the noun singular
//if the number is greater than 1, make the noun plural

for (i=0; i<noun.length; i++) {
	if (count[i] === 1) {
		console.log("there is " + count[i] + " " + noun[i]);
	} else {
		console.log("there ARE " + count[i] + " "  + noun[i] + "s");
	}
}

