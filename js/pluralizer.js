// bare minimum solution: 
var thing = 'dog';
var count = 1;

if (count > 1) {
    console.log(count + ' ' + thing + 's');
} else {
    console.log(count + ' ' + thing);
}

// build in exceptions for irregulat plurals for a challenge
var animalArray = ['dog', 'cat', 'fish', 'species of fish', 'deer', 'elk', 'ox','caribou'];
var testCounts = [1,2,3,0,-2];

// create function with switch statement to determine mode of handling: normal (0), no 's'(1), 'es'(2), 'en'(3)

function irregularCheck(noun) {
    var pluralHandling = null;
    
    switch(noun){
        
        case('fish'):
            pluralHandling = 1;
            break;
        case('species of fish'):
            pluralHandling = 2;
            break;
        case('deer'):
            pluralHandling = 1;
            break;
        case('elk'):
            pluralHandling = 1;
            break;
        case('ox'):
            pluralHandling = 3;
            break;
        case('caribou'):
            pluralHandling = 1;
            break;
        default:
            pluralHandling = 0;
            break;
    }
    return pluralHandling;
}

// create another switch statement function

function pluralizeIfNecessary(animal, count){
    // create var to store 
    var pluralized = null;
    var pluralType = irregularCheck(animal);

    switch(pluralType){
        case(0):
            pluralized = animal + 's';
            break;
        case(1):
            pluralized = animal;
            break;
        case(2):
            pluralized = animal + 'es';
            break;
        case(3):
            pluralized = animal + 'en';
            break;
    }

    if (count === 1 ){
        console.log(count + ' ' + animal);
    } else if (count > 1 || count === 0){
        console.log(count + ' ' + pluralized);
    } else {
        console.log('you owe me ' + Math.abs(count) + ' ' + pluralized + '!');
    }

}

animalArray.forEach(function(animal){
    pluralizeIfNecessary(animal, 1);
})

animalArray.forEach(function (animal) {
    pluralizeIfNecessary(animal, 2);
})

animalArray.forEach(function (animal) {
    pluralizeIfNecessary(animal, 0);
})

animalArray.forEach(function (animal) {
    pluralizeIfNecessary(animal, -3);
})