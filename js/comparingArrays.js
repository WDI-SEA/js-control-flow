// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a === b)

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function arrayEquals (arr1, arr2) {
  return Array.isArray (arr1) && Array.isArray (arr2) && 
  arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index]);
}
console.log(arrayEquals (arr1, arr2))
console.log(arrayEquals (arr1, arr3))
console.log(arrayEquals (arr2, arr3))
console.log(arrayEquals (arr4, arr3))
