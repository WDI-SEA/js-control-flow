// const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr1 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
let match = false;
const arr2 = [0, 2, 4, 6];



if (arr1.length !== arr2.length) {
  match = false;
  // console.log('arrays not match');
} else {
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      match = false;
      break;
    } else {
      match = true;
    }
  }
}

if (match === false) {
  console.log("arr1 and arr2 are not equal!");

} else {
    console.log("arr1 and arr2 are equal!");
}


