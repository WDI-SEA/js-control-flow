var thing = 'cat';
var count = 3;

switch(true) {
    case (count === 1):
        console.log(thing);
        break;
    case (count > 1):
        console.log(count + thing + 's');
}

// if (count > 1) {
//     console.log(count, thing + 's');
// } else {
//     console.log('1', thing);
// }