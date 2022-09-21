function translateGreeting(language) {
    if (language === "en") {
      console.log("Hello World");
    } else if (language === "ch") {
      console.log("你好，世界");
    } else {
      console.log("Bonjour le monde");
    }
  }
  translateGreeting("ch");