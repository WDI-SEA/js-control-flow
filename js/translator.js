//reads a variable with language code and prints the translation of "Hello World" for that language
//You should have a variable for the language code
//program should print the translation of "Hello World" nased on the language code in the variable
//It should support at least 3 languages

var language = "es";
var phrase = "Hello World";

if (language === "en") {
    console.log(phrase);
} else if (language === "es") {
    console.log("Hola Mundo");
} else if (language === "fr") {
    console.log("Bonjour le Monde");
} else if (language === "de") {
    console.log("Hallo Welt");
} else {
    console.log("Language not found");
}