let thing = 'cat';
let count = 5;
let plural = `${thing}s`

function pluralizer(thing, count){
    if(count > 1){
        console.log(plural);
    } else{
        console.log(thing);
    }
}

console.log(count + " " plural);