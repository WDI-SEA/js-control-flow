const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
const arr4 = [0, 2, 4, 6]
let switcher = 0
for (let i = 0; i < arr1.length-1; i++) {
    if (arr1[i] != arr2[i]) {
    console.log('Array does not contain same values.')
    switcher = 1
    break
    }
}
if (switcher == 0) {
    console.log('Array contain same values')
}