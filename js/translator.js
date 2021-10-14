let lang = ["en", "es", "fr",]
let helloWorld = Math.floor(Math.random()*lang.length)
if(helloWorld == 0){
  console.log("Hello, world.")
}else if(helloWorld == 1){
  console.log("Hola, mundo is hello world in Spanish!")
}
else{
  console.log("Bonjour le monde is hello world in French!.")
}