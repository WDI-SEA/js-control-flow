

var thing = 'elephant'
var count = 0

if (count > 1) {
    console.log(count + " " + thing + 's');
} else {
    console.log(count + " " + thing);
}

//or

if (count > 1) {
    console.log(count.toString(), thing + 's');
} else {
    console.log('1', thing);
}

//or

// if (!count) {
//     console.log("There's nothing here!");
// } else if (count > 1) {}
//     console.log(count.toString(), thing + 's');
// } else {
//     console.log('1', thing);
// }