let lang = prompt("Please, enter your language")

switch (true){
case(lang == "en"):
console.log("Hellooo World !!");
break;

case(lang == 'de'):
console.log("Hallo Welt!!");
break;

case(lang == 'es'):
console.log("Hola Mundo");
break;

case(lang == 'fr'):
console.log("Bonjour le monde");
break;

default:
    console.log("No translator found for this lang!");
}
