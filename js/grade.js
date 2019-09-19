const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  prompt.question(`What's the grade boss?`, (grade) => {
    switch (true){
        case grade >= 90:
            grade = "A";
            break;
        case grade >= 80:
            grade = "B";
            break;
        case grade >= 70:
            grade = "C";
            break;
        case grade >= 60:
            grade = "D";
            break;
        default:
            grade = "F";               
    }  
    console.log(`Mark 'em down for a ${grade}!`)
    prompt.close()
  })
  