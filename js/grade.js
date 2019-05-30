//Write a program that will print the letter grade,
// given a variable with a test score. Display 
//either "A", "B", "C", "D", or "F", for an score that is 
//an integer between 0 and 100.

//**Requirements**
//* Your program should have a variable to store the letter
// grade (an integer between 0 and 100)
//* For the letter grades, you may use whatever grading
// scale you like
var grade;

 var ts = 100;
   switch(true) {
       case (ts >= 90):
        grade = "A";
        break;
       case (ts <= 89 || ts >=80):
        grade = 'B';
       break;
       case (ts <= 79 || ts >=60):
       grade= 'C';
       break;
       case (ts <= 59 || ts >=50):
       grade= 'D'
       break;
       case (ts <= 49 || ts >=00):
       grade = 'F'
       break;


   };

console.log(grade)