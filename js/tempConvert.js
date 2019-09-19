const prompt = require('readline');

const sys = prompt.createInterface({
    input: process.stdin,
    output: process.stdout
});

sys.question(`Please enter a temperature in Fahrenheit: `, (answer1) => {
    sys.question(`I will convert it, please enter "c" for Celsuis or "k" for Kelvin. Those are your only choices. ` , (answer2) => {
        if (answer2 == "c") {
            var fToCel = (answer1 - 32) * 5 / 9;
            result = `${answer1}\xB0F is ${fToCel}\xB0C.`;
        }else if (answer2 == "k") {
            var fToCelToK = (answer1 - 32) * 5 / 9 + 273.15;
            result = `${answer1}\xB0F is ${fToCelToK }\xB0K.`;
        }else {
            result = `Please try again`
        }
        console.log(`${result}`);
        sys.close();
    });
});