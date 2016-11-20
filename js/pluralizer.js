// Write a program that takes an input like...

// var thing = 'cat';
// var count = '5';
// and output the pluralized form of the word, depending on what count is. 
// For example, "5 cats" or "1 dog".

// Requirements

// Your program should pluralize the word based on an integer (count)

var theThing = 'badger';
var count = 12;

function pluralizer(thing, amount) {
	switch(amount) {
		case 0:
			console.log("no " + thing + "s");
			break;
		case 1:
			console.log("1 " + thing);
			break;
		default:
			console.log(amount + ' ' + thing + "s");
	}
}

pluralizer(theThing, count);