let thing = 'dog';
let count = 2;

function pluralizer(thing, count){
    if (count < 2) {
        console.log(count + ' ' +thing)
    } else {
        console.log(count + ' ' + thing + 's')
    }
}

pluralizer(thing, count)