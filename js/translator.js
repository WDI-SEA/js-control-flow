/*
 * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
 * Your program should print the translation of "Hello World" based on the language code in the variable.
 * It should support at least 3 languages
 * Make sure to test with the different languages you choose.
 * (Feel free to Google the translation if you aren't fluent.)
 */

const helloWorlds = {
  es: "Hola Mundo",
  fr: "Bonjour monde",
  en: "Hello World",
};

function translator(code) {
  console.log(helloWorlds[code]);
}

translator("es");
