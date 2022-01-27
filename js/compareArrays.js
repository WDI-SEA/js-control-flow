const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArrays(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
     if (array1[i] !== array2[i]) {
       console.log(array1 + ' and ' + array2 + ' are NOT equal')
       break
     } else if (i === (array1.length - 1) && array1[i] === array2[i]) {
       console.log(array1 + ' and ' + array2 + ' are equal')
     }
    }
  } else {
    console.log(array1 + ' and ' + array2 + ' are NOT equal')
  }
}

compareArrays(arr1, arr2)