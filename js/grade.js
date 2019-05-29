var score = 99;

function Grade(score) {
    switch(true) {
        case (90 <= score && score <=100):
            console.log("Congratulations! You got an A!");
            break;
        case (80 <= score && score <90):
            console.log("Good job! You got a B!");
            break;
        case (70 <= score && score <80):
            console.log("Not bad! You got a C!");
            break;
        case (60 <= score && score <70):
            console.log("Come back next time! You got a D!");
            break;
        case (0 <= score && score < 60):
            console.log("So bad! You got an F!");
            break;
        default:
            console.log("Invalid Score");
    }
}
Grade(score);
Grade(50);
Grade(101);
Grade(-1);