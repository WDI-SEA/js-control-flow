const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 8, 'i'];

function arraysSame(array1, array2){
    if (array1.length !== array2.length) {
    return "not indentical";
    }
    for (let i = 0, long = array1.length; i < long; i++){
        if (array1[i] !== array2[i]){
            return "not indentical";
        }
    }
    return "indentical";
}

console.log (arraysSame(arr1,arr2))