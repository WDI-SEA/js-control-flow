//outputs the pluralized form of the word, depending on what count is
//For example, "5 cats" or "1 dog".
//Change thing to different values to test your code!
//Your program should pluralize the word based on an integer (count)

var thing = 'cat';
var count = 1;

if (count === 1) {
    console.log(count + " " + thing);
} else {
    console.log(count + " " + thing + "s");
}