// To take in two variables and depending on count, it will change thing to be plural or not, and return it

var thing = "cat";
var count = 1;

var pluralizer = function() {
    if (count > 1) {
        console.log(thing + 's');
    } else {
        console.log(thing);
    }
}
pluralizer();
