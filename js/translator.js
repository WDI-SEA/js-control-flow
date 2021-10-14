// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// Requirements

// You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// Your program should print the translation of "Hello World" based on the language code in the variable.
// It should support at least 3 languages
// Make sure to test with the different languages you choose.
// (Feel free to Google the translation if you aren't fluent.)


// english = "Hello World"
// chinese = "你好，世界"
// french = "Bonjour le monde "

function translateGreeting(language) {
    if(language === "english"){
      console.log("Hello World")
    } else if(language === "chinese") {
      console.log("你好，世界")
    } else {
      console.log("Bonjour le monde")
    } 
  }
  translateGreeting("chinese")