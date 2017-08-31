var scores = [99, 88, 77, 66, 55, 77, 87, 74];

for (i=0; i<scores.length; i++) {
	switch (true) {
		case (scores[i] > 90):
		console.log("the score was an A");
		break;

		case (scores[i] > 80):
		console.log("the score was a B");
		break;

		case (scores[i] > 70):
		console.log("The score was C");
		break;

		case (scores[i] > 60):
		console.log("the score was Dz nuts");
		break;

		case (scores[i] > 50):
		console.log("failure");
	}
}