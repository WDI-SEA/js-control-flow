let testScores = Math.random() * 100

    if (testScores >= 90) {
        console.log("You got an A");
    } else if (testScores <= 89) {
        console.log("You got a B");
    } else if (testScores <= 79) {
        console.log("You got a C");
    } else if (testScores <= 69) {
        console.log("You got a D");
    } else {
        console.log("you got a F");
    }