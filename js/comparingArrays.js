let arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
let arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
    return true;
    }
    return false;
}