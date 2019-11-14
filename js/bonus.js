var score = 95;

switch (true) {
    case (score <= 60):
            console.log("Your test score was", score, "and your letter grade is F.");
            break;
    case (score <= 70):
            console.log("Your test score was", score, "and your letter grade is D.");
            break;
    case (score <= 80):
            console.log("Your test score was", score, "and your letter grade is C.");
            break;
    case (score <= 90):
            console.log("Your test score was", score, "and your letter grade is B.");
            break;
    case (score <= 100):
            console.log("Your test score was", score, "and your letter grade is A.");
            break;
}