const langCode = ["es", "ar", "fr", "en"]

for (let i=0; i<=langCode.length-1; i++) {
  if (langCode[i]=="es") {
    console.log("Hola Mundo")
  } else if (langCode[i]=="ar") {
    console.log("مرحباً يا عالم")
  } else if (langCode[i]=="fr") {
    console.log("Bonjour le monde")
  } else {
    console.log("Hello World")
  }
}