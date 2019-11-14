var grade = "" ;

var testScore = 56;

switch(true){
case (testScore < 20):
grade="F";
break;

case (testScore < 40):
grade="E";
break;

case (testScore < 60):
grade="D";
break;

case (testScore < 80):
grade="C";
break;

case (testScore < 100):
grade="A";
}

console.log(grade);


