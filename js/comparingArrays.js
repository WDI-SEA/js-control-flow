var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i']
var arr4 = [0, 2, 4, 6]

// let a=arr1
// let b=arr2
// let c=arr3
// let d=arr4
// let match=true

for(let i=0; i<arr1.length; i++){
    if(arr1.length !== arr4.length) {
        console.log('Arrays are not a match.')
    } else {
        console.log('Arrays are a match!')
    }
}

//tried to use !=== in line 13 but it showed up as an error in Replit, not sure why you can't use that here?