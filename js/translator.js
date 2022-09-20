const en = "Hello World"
const es = "Hola Mundo"
const de = "Hallo Welt"
const fr = "Bonjour le monde"

let translation = prompt("Write en for English, es for Spanish, de for German and fr for french")

if (translation === "en") {
  console.log(en)
} else if (translation === "es") {
  console.log(es)
} else if (translation === "de") {
  console.log(de)
} else if (translation === "fr") {
  console.log(fr)
} else {
  console.log("Invalid! Choose en, es, de or fr")
}