var grade = 55;
var gradeB = 80;
var gradeC = 70;
var gradeD = 60;
var gradeF = 50;

switch(true){
    case (grade>= 90):
    console.log('You got an A!!!!');
    break;
  case (grade>=gradeB):
    console.log('You got an B! :/');
    break;
  case (grade>=gradeC):
    console.log('You got an C :/');
    break;
  case (grade>=gradeD):
    console.log('You got an D :(');
    break;
  case (grade>=gradeF):
    console.log('You got an F ( o_o)');
    break;
  default:
    console.log('Wow that sucks, do better next time >=(');
    break;
}
