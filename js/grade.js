var grade = 95;
console.log("grade number: " + grade);
var num;
if (grade >=90){
	num=0;
}
else if (grade >=80 ){
	num=1;
}
else if (grade >=70){
	num=2;
}
else if(grade >=60){
	num=3;
}
else {
	num=4;
}
switch (num){
	case 0:
		console.log("grade letter A");
		break;
	case 1:
		console.log("grade letter B");
		break;
	case 2:
		console.log("grade letter C");
		break;
	case 3:
		console.log("grade letter D");
		break;
	default:
		console.log("grade letter F");
}