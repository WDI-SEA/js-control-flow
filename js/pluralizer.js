// To take in two variables and depending on count, it will change thing to be plural or not, and return it

var thing = "cat";
var count = 5;

var pluralizer = function() {
    if (count > 1) {
        return thing + 's';
    } else {
        return thing;
    }
}

//Done 