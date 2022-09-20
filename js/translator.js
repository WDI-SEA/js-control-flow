const translateLite ={
    "fr": {
        "Hello": "Salut",
        "World" : "Le Monde"
    },
    "it":{
        "Hello": "Ciao",
        "World" : "Mondo"
    },
    "es":{
        "Hello": "Hola",
        "World" : "Mundo"
    },
}

let selectedLang = "ES"

    if(selectedLang.charAt(0)==selectedLang.charAt(0).toUpperCase()){
        selectedLang = selectedLang.toLowerCase(); 
        if(translateLite.hasOwnProperty(selectedLang)){
            let message =translateLite[selectedLang]["Hello"] +" "+translateLite[selectedLang]["World"]
            console.log(message)
        }else{
            console.log("Sorry, your selected language isn't available yet ")

        }
   
 
}


