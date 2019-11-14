/*translator.js
Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

Requirements

You should have a variable for the language code (e.g. "es", "de", "fr", "en").
Your program should print the translation of "Hello World" based on the language code in the variable.
It should support at least 3 languages
Make sure to test with the different languages you choose.
(Feel free to Google the translation if you aren't fluent.)
*/

var language = ["es", "de", "fr", "en", "jp", "it", "du", "rs", "sw", "ch"]

//generate randome language
var activeLanguage = language[Math.floor(Math.random() * 10)]

//check active language:
//console.log(activeLanguage)

	var arrPhrase = {
	es: "Hola mundo",
	de: "Hallo Welt",
	en: "Hello world",
	fr: "Bonjour monde",
	jp: "Konnichiwa sekai",
	it: "Ciao mondo",
	du: "Hallo wereld",
	rs: "Privet: mir",
	sw: "Salamu: Dunia",
	ch: "Nǐ hǎo, shìjiè"
  }

	console.log(arrPhrase[activeLanguage])