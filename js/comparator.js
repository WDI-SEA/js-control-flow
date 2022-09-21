let a = [1,2,3]
let b = [1,2,3]
// let c = ["a","b","c"]

let result = true

// if the arrays are of the same length
if (a.length === b.length) {
	// loop through both arrays, comparing values at index i
	for(let i=0; i<a.length; i++) {
		// compare the two values at index i
		if(a[i]!==b[i]) {
			// if the two values AREN'T the same
			result = false
			break
		}
	}
} else {
	// if they AREN'T the same lenght, they're not the same
	result = false
}

console.log(result)