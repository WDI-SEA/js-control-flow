// Write a program that takes an input like...

// var thing = 'cat';
// var count = '5';
// and output the pluralized form of the word, depending on what count is. 
// For example, "5 cats" or "1 dog".

// Requirements

// Your program should pluralize the word based on an integer (count)

var thing = 'cat';
var count = '1';

if (count == 0) {
	console.log('no ' + thing);
} else if (count == 1) {
	console.log(count + ' ' + thing);
} else if(count > 1) {
	console.log(count + ' ' + thing + 's');
}