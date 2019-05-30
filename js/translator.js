// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// Requirements

// You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" based on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)

var text = "Hello World"
var language = "fr"; 


//If Else Version

// if (language === "en") {
//     console.log(text);
// } else if (language === "fr") {
//     console.log("Bonjour le Monde");
// } else if (language === "de") {
//     console.log("Hallo Welt"); 
// } else if (language === "es") {
//     console.log("Hola Mundo");
// } else {
//     console.log("Sorry I don't understand");
// }

//Switch Statement

switch (language) {
    case ("en"):
        console.log(text);
        break;

    case ("fr"):
        console.log("Bonjour le Monde");
        break;

    case ("de"):
        console.log("Hallo Welt"); 
        break;

    case ("es"):
        console.log("Hola Mundo");
        break;

    default:
        console.log("Sorry I don't understand");
        break;


}