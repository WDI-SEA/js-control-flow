const testScore = 50;
var testGrade;
/*if (testScore >= 90){
    testGrade = "A";
}
else if (testScore >= 80){
    testGrade = "B";
}
else if (testScore >= 70){
    testGrade = "C";
}

else if (testScore >= 60){
    testGrade = "D";
}

else { testGrade = "F";
}*/


//Bonus:

switch(true){
    case testScore >= 90:
         testGrade = "A"
         break;

     case testScore >= 80:
        testGrade = "B"
        break;

    case testScore >= 70:
       testGrade = "C"
        break;    

    case testScore >= 60:
         testGrade = "D"
         break;

     default: 
        testGrade = "F"
        break;    
    
    
}

console.log(testGrade);

