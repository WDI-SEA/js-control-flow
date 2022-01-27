let array1 = [1, 'a', 3, 'e', 5, 7, 5, 'i']
let array2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

if (array1.length === array2.length) {
  for (let i = 0; i < array1.length; i++) {
    let a = array1[i]
    let b = array2[i]
    if (a !== b) {
      console.log("unequal")
      i = array1.length + array2.length // add lengths to guarantee loop exit
    } else if (i !== array1.length - 1) {
      // this does nothing but will re-enter the for loop
    } else if (array1[array1.length - 1] === array2[array2.length - 1]) {
      console.log("equal")
      i = array1.length + array2.length // exit loop
      // using "else if (array1[array1.length - 1] === array2[array2.length -1])" instead of "else" to make sure it checks through each index and then if it matches up all the way to the last index, prints "equal". Otherwise, it will print "equal" every time the corresponding index matches up
    }
  }
} else {
  console.log("unequal")
}


