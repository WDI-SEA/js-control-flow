const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArray(array1, array2) {
  if(array1.length !== array2.length){
    console.log('Arrays have different lengths')
  }
  for(let i=0; i<array1.length; i++) {
    if(array1[i] !== array2[i]) {
      console.log ('Arrays are different')
    } else {
      console.log('Arrays are the same')
    }
  }
}
console.log(compareArray(arr1, arr2))
console.log(compareArray(arr3, arr4))
console.log(compareArray(arr1, arr4))
