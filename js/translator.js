//translate the 

const langCode = "es"

if (langCode == "es") {
    console.log("Hola Mundo")
} else if (langCode == "fr") {
    console.log("Bounjour Le Monde")
} else if (langCode == "de") {
    console.log("Hallow Welt")
} else if (langCode == "en") {
    console.log("Hello World")
} else {
    console.log("Whoa there buddy, I don't know that many languages!")
}













// var es = "Hola Mundo"
// var fr = "Bonjour le monde"
// var da = "Hej Verden"
function translateGreeting(language){ 
// let language = "fr"
switch(language) {
  case "es":
    console.log("Hola Mundo");
    break;
  case "fr":
    console.log("Bonjour le monde");
    break;
  case "da":
    console.log("Hej Verden");
    }
}
translateGreeting("es")
