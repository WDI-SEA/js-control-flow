
const readline = require('readline-sync')
let langCode = "en"

langCode = readline.question(`Select a language (type en for English, es for Spanish, de for German and fr for French :\n`)

if (langCode=="") {
  console.log('None selected')
} else if (langCode == "en") {
  console.log('Hello World')
} else if (langCode == "es") {
  console.log('Hola Mundo')
} else if (langCode == "de") {
  console.log('Hallo Welt')
} else if (langCode == "fr") {
  console.log('Bonjour le monde')
}
