const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6]; 

if (arr1 === arr2) {
  console.log("these match");
} else if (arr1 === arr3) {
  console.log("these don't match");
} else if (arr1 === arr4) {
  console.log("these don't match either")
} else {
  console.log("wasn't a match")
}