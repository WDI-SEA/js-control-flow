const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]

let a = arr1
let b = arr3

//Caution: this for statement is an unending loop right now :/

for (let i = 0; i < a.length; i++){ 
  for (let j = 0; j < b.length; j++) {
  while (a.length===b.length && a[i]===b[j]){
    console.log('These arrays are the same')
    }
  }
}