var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

let match = true

//check if the arrays are the same length
if (arr1.length !== arr2.length) {
  console.log('These arrays are NOT equal.')
  match = false
} else {
//loop through the array items and compare. if a pair doesn't match, log the message and break the loop
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log('These arrays are NOT equal.')
      match = false
      break
    }
  }
}

//if match is still true after the above, log the success message
if (match === true) {
  console.log('These arrays are identical.')
}
