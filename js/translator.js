// ### translator.js
// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// **Requirements**
// * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// * Your program should print the translation of "Hello World" based on the language code in the variable.
// * It should support at least 3 languages
// * Make sure to test with the different languages you choose.
// * (Feel free to Google the translation if you aren't fluent.)

//Array that stores the language code
const arrayCode = ['es', 'de', 'fr', 'en'];
//Object that stores language code as key and the respective translation of hello world as the value
const helloWorldObject = {
    'es': 'Hola, Mundo!',
    'de': 'Hallo, Welt!',
    'fr': 'Bonjour, Monde!',
    'en': 'Hello, World!'
}

//generate a random number to access a language code
let randomNumber = Math.floor(Math.random()*4);
//Print a Hello World statement in the object by accessing a key using the array of language codes and the random number as its index
console.log(helloWorldObject[arrayCode[randomNumber]]);
