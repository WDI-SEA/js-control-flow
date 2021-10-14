const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'b', 3, 'e', 6, 7, 9, 'i'];

for (let i = 0; i < arr1.length; i++) {
    if(arr1.length != arr2.length) {
    console.log("array length are not equal") }
    else if (arr1[i] == arr2[i]) {
    console.log('this is the same')
  } else {
    console.log('this is not the same')
  }
}
