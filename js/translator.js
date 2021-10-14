/* translator.js
Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

Requirements

You should have a variable for the language code (e.g. "es", "de", "fr", "en").
Your program should print the translation of "Hello World" based on the language code in the variable.
It should support at least 3 languages
Make sure to test with the different languages you choose.
(Feel free to Google the translation if you aren't fluent.) */

/* SWITCH VERSION */

let langCode = ""
let translationChinese = "世界您好" 
let translationEnglish = "Hello World"
let translationFinnish = "Moi maailma"
let translationJapanese = "ハローワールド"
let translationKorean = "전 세계 여러분 안녕하세요"

let codeChinese = "zh"
let codeEnglish = "en"
let codeFinnish = "fi"
let codeJapanese = "jp"
let codeKorean = "kr"

switch(langCode) {
    case (codeChinese):
        console.log(translationChinese)
        break;
    case (codeFinnish):
        console.log(translationFinnish)
        break;
    case (codeJapanese):
        console.log(translationJapanese)
        break;
    case (codeKorean):
        console.log(translationKorean)
        break;
    default:
        console.log(translationEnglish)
        break;
    }



var userChoice = "zh"


/* Map VERSION */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in */ 
const translationMap = {
// "key" : "value",
    "zh": "世界您好",
    "en": "Hello World",
    "fi": "Moi maailma",
    "jp": "ハローワールド",
    "zr": "전 세계 여러분 안녕하세요",
}

if (countryCode in translationMap) {
    console.log(translationMap[countryCode])
} else {
    console.log("Country code not supported!")
}



