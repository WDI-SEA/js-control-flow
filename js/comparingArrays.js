const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]

function comparingArrays(a1, a2) {
  if (a1.length === a2.length) {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        return console.log("False")
      }
    }
    return console.log("True")
  } else if (a1.length !== a2.length) {
    return console.log("False")
  }
}
comparingArrays(arr3, arr2)