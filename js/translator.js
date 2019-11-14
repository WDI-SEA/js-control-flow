var languageCode = "sc";

let langs = {
    "en" : {translation: "Hello Word!", langName: "English", numSpeakers: 54746},
    "es" : {translation: "Hola Mundo!", langName: "Spanish", numSpeakers: 68643},
    "de" : {translation: "Hallo Welt", langName: "German", numSpeakers: 77546},
    "jp" : {translation: "Konichiwa!", langName: "Japanese", numSpeakers: 53296},
    "fr" : {translation: "Bonjour le monde!", langName: "French", numSpeakers: 64397}
}

//add or delete stuff from object
delete langs['fr'];
langs['sc'] = {translation: "Okay...", langName: "Sarcasm", numSpeakers: "infinite"};

if (langs[languageCode]) {
    console.log('In', langs[languageCode].langName + ",", langs[languageCode].translation, "is how you say Hello Word! There are", langs[languageCode].numSpeakers, "speakers.");
} else {
    console.log("I do not recognize this language.");
}

// if (languageCode == "fr") {
//     console.log("Hello World in French is: Bonjour le monde.");
// } else if (languageCode == "es") {
//     console.log("Hello World in Spanish is: Hola Mundo.");
// } else if (languageCode == "pt") {
//     console.log("Hello World in Portuguese is: Olá Mundo.");
// } else {
//     console.log("This language is not supported, try fr, es or pt.");
// }

//tests

/*

var languageCode = "fr";

if (languageCode == "fr") {
    console.log("Hello World in French is: Bonjour le monde.");
} else if (languageCode == "es") {
    console.log("Hello World in Spanish is: Hola Mundo.");
} else if (languageCode == "pt") {
    console.log("Hello World in Portuguese is: Olá Mundo.");
} else {
    console.log("This language is not supported, try fr, es or pt.");
}

var languageCode = "pt";

if (languageCode == "fr") {
    console.log("Hello World in French is: Bonjour le monde.");
} else if (languageCode == "es") {
    console.log("Hello World in Spanish is: Hola Mundo.");
} else if (languageCode == "pt") {
    console.log("Hello World in Portuguese is: Olá Mundo.");
} else {
    console.log("This language is not supported, try fr, es or pt.");
}

var languageCode = "es";

if (languageCode == "fr") {
    console.log("Hello World in French is: Bonjour le monde.");
} else if (languageCode == "es") {
    console.log("Hello World in Spanish is: Hola Mundo.");
} else if (languageCode == "pt") {
    console.log("Hello World in Portuguese is: Olá Mundo.");
} else {
    console.log("This language is not supported, try fr, es or pt.");
}

*/