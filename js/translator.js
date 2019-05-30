// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" nased on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)

var language = 'fr';

switch(language) {
    case 'en':
        console.log('Hello World');
        break;
    case 'es':
        console.log('Hola Mundo');
        break;
    case 'it':
        console.log('Ciao Mondo');
        break;  
    case 'de':
        console.log('Hallo Welt');
        break;  
    default:
        console.log('I do not understand');
        break;
}