var testScore = 98;
// if (testScore >= 90) {
// 	console.log("You get an A!");
// }else if (testScore >= 80) {
// 	console.log("You get a B!");
// }else if (testScore >= 70) {
// 	console.log("You get a C!");
// }else if (testScore >= 60) {
// 	console.log("You get a D!");
// }else {
// 	console.log("You get an F");
// }
switch (testScore) {
	case 100:
		console.log("You get an A!");
		break;
	case 99:
		console.log("You get a B!");
		break;
	case 98:
		console.log("You get a C!");
		break;
	case 97:
		console.log("You get a D!");
		break;
	default:
		console.log("You get an F!");
}