/*
Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

Requirements

You should have a variable for the language code (e.g. "es", "de", "fr", "en").
Your program should print the translation of "Hello World" based on the language code in the variable.
It should support at least 3 languages
Make sure to test with the different languages you choose.
(Feel free to Google the translation if you aren't fluent.)

*/

let word = "Hello World"

// language can be "es", "de", "fr", "en"
let language = "es";

if (language === "es"){
    console.log("Hola Mundo");
}else if (language === "de"){
    console.log("Hallo Welt");
}else if (language === "fr"){
    console.log("Bonjour le monde");
}else if (language === "en"){
    console.log("Hello World");
} else {
    console.log("Invalid Characters");
}