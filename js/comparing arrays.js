let arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i']
let arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'x']
let count = 0

if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        if (typeof (arr1[i] === arr2[i])) {
            count += 1
        }

        else if (valueOf(arr1[i] === arr2[i])) {
            count += 1
        }

        // else if(sort.arr1[i] === sort.arr2[i]){
        //  count += 1 
        // }
        else {
            count = 0;
            console.log("They are not the same!")
        }
    }

}
else {
    console.log("Array length is not equal")
}

if (count > 1) {
    console.log("The array is equal")
}
