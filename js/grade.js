function grades(score) {
    var letterGrade;
    
    switch(true) {
        case (score <= 100 && score >= 90):
            letterGrade = 'A';
            break;
        case (score <=89 && score >= 80):
            letterGrade = 'B';
            break;
        case (score <= 79 && score >= 70):
            letterGrade = 'C';
            break;
        case (score <= 69 && score >= 60):
            letterGrade = 'D';
            break;
        case (score <= 59 && score >= 0):
            letterGrade = 'F';
            break;
        case (score > 100 && score < 0):
            letterGrade = 'Invalid';
            break;
    }
    return letterGrade;
}

console.log(grades(92));
console.log(grades(44));
console.log(grades(75));
