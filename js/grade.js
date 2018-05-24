var score = Math.floor(Math.random() * 101);

switch(true){
	case score >= 90:
		console.log('You got an A');
		break;
	case score >= 80 && score < 90:
		console.log('You got a B');
		break;
	case score >= 70 && score < 80:
		console.log('You got a C');
		break;
	case score >= 60 && score < 70:
		console.log('You got a D');
		break;
	case score < 60:
		console.log('You got an F');
		break;
}