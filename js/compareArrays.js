var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
var arr4 = [0, 2, 4, 6]

let a = arr1
let b = arr2
let match = false

if (a.length !== b.length) {
    console.log('The arrays are not the same')
} else {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            match = true
        } else {
            match = false
            console.log('The arrays are not the same')
            break
        }
    }
    if (match) {
        console.log('The arrays match')
    }
}

