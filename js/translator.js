const prompt = require('readline');

const sys = prompt.createInterface({
    input: process.stdin,
    output: process.stdout
});

sys.question(`Type something and I'll translate it: `, (answer1) => {
    sys.question(`LOL, I can't translate that. Sorry, I'll translate "Hello World" Instead. Which Language? "es", "de", "fr: " `, (answer2) => {
        if (answer2 === "es") {
            var result = `Hello World in Spanish is Hola Mundo`;
        }else if (answer2 === "fr"){
            var result = `Hello World in French is Bonjour le monde`;
        }else if (answer2 === "de") {
            var result = `Hello World in German is Hallo Welt`;
        }else {
            var result = `Sorry, too stupid too understand. Try again`
        }
        console.log(`${result}`);
        sys.close();
    });
});