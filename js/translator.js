var language = "fr"

if (language === "en") {
    console.log("Hello World")
} else if (language === "sp") {
    console.log("Hola Mundo")
} else if (language === "fr") {
    console.log("Bonjour le monde")
} else {
    console.log("I don't know that language, sorry!")
}

/*Using an object to simplify:

let langCode = 'en'
let langs = {
    "en": "Hello World",
    "es": "Hola al Mundo",
    "fr": "Bonjour le monde"
}

if (langs[langCode]) {
    console.log(langs[langCode]) => prints "Hello World"
}
else {
    console.log("I don't know that language, sorry!")
}


Nested objects:

let langCode = 'en'
let langs = {
    "en": {name: "English", tran: "Hello World", speakers: 3409382},
    "es": {name: "Espanol", tran: "Hola al Mundo", speakers: 493083},
    "fr": {name: "French", tran: "Bonjour le monde", speakers: 394083}
}

if (langs[langCode]) {
    console.log(`In ${langs[langCode].name} ${langs[langCode].tran} is how you say 'Hello World' and there are ${langs[langCode].speakers} speakers of this language`) => prints "In English 'Hello World' is how you say 'Hello World' and there are X speakers of this language"
}
else {
    console.log("I don't know that language, sorry!")
}

*/