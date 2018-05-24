var thing = 'fly';
var count = 5;
//find the last letter of the thing
var ending = thing[thing.length -1];

// if the thing ends in s, add -es to it
if (count > 1 && ending === 's') {
  console.log(count + " " + thing + "es");
// if the thing ends in y, replace y with -ies
} else if (count > 1 && ending === 'y') {
// take y off of thing;
    thing = thing.slice(0, -1);
    console.log(count + " " + thing + "ies");
} else if (count === 1) {
    console.log("just one " + thing);
} else {
    console.log(count + " " + thing + "s");
};
