var thing = 'cat';
var count = 5;

if (count === 1) {
    console.log(`There is one ${thing}.`)
} else {
    console.log(`There are ${count} ${thing}s.`)
}

/* old solution:
if (count >=2 || count == 0) {
    thing += 's';
    console.log(count + " " + thing);
} else if (count == 1) {
    console.log(count + " " + thing);
}
*/