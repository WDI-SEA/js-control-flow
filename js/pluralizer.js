// Write a program that starts like...

// var thing = 'cat';
// var count = 5;
// and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!

var dog = 'german shepherd'
var count = 1;

if (count > 1) {
var pluralizedDogs = console.log(`${count} ${dog}s`)
} else {
    console.log('You only have one dog.')
}