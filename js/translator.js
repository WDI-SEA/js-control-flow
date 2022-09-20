function translate() {
    let en = "Hello World"
    let languages = ["Spanish", "Russian", "Korean"]
    let helloWorld = ["Hola Mundo", "Привет, мир", "안녕하세요 세계"]
  
    let returnedLangIndex = Math.floor(Math.random() * languages.length);
  
    let helloWorldIndex = returnedLangIndex
  
    console.log(en + " is " + helloWorld[helloWorldIndex] + " in " + languages[returnedLangIndex])
  }
  
  translate()