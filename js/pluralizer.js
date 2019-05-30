// Your program should pluralize the word based on an integer (count)

//will need statements for 0, 1, and more than one

var count = 2;
var thing = 'cat';

if (count === 0) {
    console.log("you have 0 " + thing + "s")
} else if (count < 0) {
    console.log("you can't have negative " + thing + "s.")
} else if (count < 2) {
    console.log("you have 1 " + thing)
} else if (count >= 2) {
    console.log("you have " + count + " " + thing + "s.")
};