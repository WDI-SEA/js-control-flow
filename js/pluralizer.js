const prompt = require('readline');

const sys = prompt.createInterface({
    input: process.stdin,
    output: process.stdout
});

sys.question('Please enter a thing: ', (answer1) => {
    sys.question('How many of those things do you have? ', (answer2) => {
        if (answer2 >= 2) {
            var result = `${answer2} ${answer1}s`
        }else {
            var result = "nothing plural. I'm a pluralizer man. Geez, give me more to work with"
        }
        console.log(`You have ${result}`);
        sys.close();
    });
});