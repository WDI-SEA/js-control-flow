var thing = 'cat';
var count = 5;

function Pluralizer(thing, count) {
    if (count === 1) {
        console.log(count + " " + thing);
    } else {
        console.log(count + " " + thing + "s")
    }
}

Pluralizer(thing, count);
Pluralizer('dog', 1);