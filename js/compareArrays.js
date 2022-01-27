const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArr (a, b) {
  if(a.length !== b.length) {
    console.log("The two arrays are not the same length")
  } else {
    let comparison = false
    for(let i=0; i<a.length; i++) {
    if(a[i] !== b[i]){
      return false;
    } else {
      comparison = true
    }
  }
  return comparison;
}
}

const comparison = compareArr(arr1, arr5)

if(comparison) {
  console.log("The arrays are equal")
} else {
  console.log("The arrays have different elements")
}
