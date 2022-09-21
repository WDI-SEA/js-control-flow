let arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
let arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
let count = 0


if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count += 1
    }
    else {
      i = arr1.length
      console.log("Oh! they are not the same!")
    }
  }

}
else {
  console.log("Please, enter two arrays that have the same length!")
}

if (count > 1) {
  console.log("Hey! they are identical!")
}
