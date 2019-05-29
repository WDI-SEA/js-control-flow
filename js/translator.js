function Translator(language) {
    switch(language) {
        case('es'):
            console.log('Hola Mundo');
            break;        
        case('de'):
            console.log('Hallo Welt');
            break; 
        case('fr'):
            console.log('Bonjour le monde');
            break; 
        case('en'):
            console.log('Hello World');
            break; 
        default:
            console.log('Sorry, your language is not supported right now');
    }
}

Translator('es');
Translator('en');
Translator('de');
Translator('fr');
Translator('ch');