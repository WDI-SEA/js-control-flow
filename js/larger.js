const prompt = require('readline');

const sys = prompt.createInterface({
    input: process.stdin,
    output: process.stdout
});

sys.question(`Please enter a number: `, (answer1) => {
    sys.question(`Now, enter another number and I'll do a magic trick: `, (answer2) => {
        if (answer1 > answer2) {
            var result = `The larger number of ${answer1} and ${answer2} is ${answer1}`;
        }else if (answer1 < answer2){
            var result = `The larger number of ${answer1} and ${answer2} is ${answer2}`;
        }
        console.log(`Just kidding on the magic trick. ${result}`);
        sys.close();
    });
});