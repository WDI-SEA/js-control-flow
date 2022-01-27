const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// this is what I had done until I wanted to turn it in

if (arr1.length === arr3.length) {
  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] === arr3[i]) {
      console.log('these are the same')
    }
    else {
      console.log('jk not the same')
    }
  }
  } else {
  console.log('these are different lengths')
}

// works for this specific problem, but definitely not the best solution

// let string1 = arr1.join('')
// let string2 = arr2.join('')
// let string3 = arr3.join('')
// let string4 = arr4.join('')

// if (string1 === string2) {
//   console.log('these are the same')
// } else {
//   console.log('these are not the same')
// }