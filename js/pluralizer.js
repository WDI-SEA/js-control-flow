/* Write a program that starts like...

var thing = 'cat';
var count = 5;
and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog".
Change thing to different values to test your code!

Requirements

Your program should pluralize the word based on an integer (count) */


var thing = 'cat';
var count = 0;

if (count > 1 || count < 1)  {
    console.log(count + " " + thing + "s" );
} else {
    console.log(count + " " + thing);
}

//Alternative solution

var thing2 = 'cat';
var count2 = 5;

if (count > 1) {
    console.log(count.toString(), thing + 's');
} else {
    console.log("1", thing);
}