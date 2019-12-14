// Write a program that starts like...

// ```js
// var thing = 'cat';
// var count = 5;
// ```
// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

// **Requirements**
// * Your program should pluralize the word based on an integer (`count`)

function pluralizeMe(thing, count) {
    return `${count} ${thing}s`;
}
var thing = 'cat';
var count = 5;
console.log(pluralizeMe(thing, count));