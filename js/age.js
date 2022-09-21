let age = prompt("How old are you?")

switch(true) {
	case (age<=1):
		console.log("infant")
		break
	case (age>1 && age<=5):
		console.log("toddler")
	case (age>5 && age<=9):
		console.log("child")
	case (age>9 && age<=12):
		console.log("preeteen")
	case (age>12 && age<=17):
		console.log("teen")
	case (age>17 && age<=20):
		console.log("Young adult")
	default:
		console.log("invalid input, please enter an integer between 0 and 20 ")
}