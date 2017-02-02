for (var i = 0; i <= 100; i++) {
    
    switch (true) {
      case (i >= 90):
        console.log("Score " + i + ' is Grade A');
        break;
      case (i >=80 && i < 90):
        console.log("Score " + i + ' is Grade B');
        break;
      case (i >= 70 && i < 80):
        console.log("Score " + i + ' is Grade C');
        break;
      case (i >= 60 && i < 70):
        console.log("Score " + i + ' is Grade D');
        break;
      case (i < 60):
        console.log("Score " + i + ' is Grade F');
        break;
      default:
        console.log('Who knows?');
    }
      
}


var grade = 95;
    switch (true) {
      case (grade >= 90):
        console.log("Score " + grade + ' is Grade A');
        break;
      case (grade >=80 && grade < 90):
        console.log("Score " + grade + ' is Grade B');
        break;
      case (grade >= 70 && grade < 80):
        console.log("Score " + grade + ' is Grade C');
        break;
      case (grade >= 60 && grade < 70):
        console.log("Score " + grade + ' is Grade D');
        break;
      case (i < 60):
        console.log("Score " + grade + ' is Grade F');
        break;
      default:
        console.log('Who knows?');
    } 

//how to stacked case
    // var letterGrade = 'B';
    // switch (letterGrade) {
    //   case 'A':
    //     console.log(letterGrade, 'is Great');
    //     break;
    //   case 'B':
    //   case 'C':
    //   case 'C':
    //     console.log(letterGrade, 'is Fair');
    //     break;
    //   case 'D':
    //     console.log(letterGrade, 'is need to Catch up');
    //     break;
    // }