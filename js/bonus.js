const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// change theses vars to test different arrays
const testArrayOne = arr1
const testArrayTwo = arr4

// if the arrays are of different lengths, they are definately not equal
if (testArrayTwo.length !== testArrayTwo.length) {
	console.log("arrays not equal")
// otherwise, we need to check each element in one array against the other array
} else {
	// if we make it to the end of the loop without changing this value to false, all 
	// indexes were equal
	let arraysEqual = true
	for (let i = 0; i < testArrayOne.length; i++) {
		// compare the value at index i in both arrays
		// if they don't match we set the bool to false and stop looping immediately
		if (testArrayOne[i] !== testArrayTwo[i]) {
			arraysEqual = false
			break
		}
	}
	if (arraysEqual) {
		console.log("the arrays are equal!")
	} else {
		console.log("arrays not equal!")
	}
}


