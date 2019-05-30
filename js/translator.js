/* Write a program that reads a variable with language code and prints the translation of 
"Hello World" for that language.

Requirements

You should have a variable for the language code (e.g. "es", "de", "fr", "en").
Your program should print the translation of "Hello World" nased on the language code in the variable.
It should support at least 3 languages
Make sure to test with the different languages you choose.
(Feel free to Google the translation if you aren't fluent.)  */

var langCode = "de";

if (langCode === "es") {
    console.log("Hola, Mundo")
} else if (langCode === "de") {
    console.log("Heil, Wurld")
} else if (langCode === "en") {
    console.log("Hello, World")
} else {
    console.log("Not a supported language")
}