const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
    return true;
    }
    return false;
}

for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === arr3[i]) {
    return true;
    }
    return false;
}

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr4[i]) {
    return true;
    }
    return false;
}

for (let i = 0; i < arr1.length; i++) {
    if (arr3[i] === arr4[i]) {
    return true;
    }
    return false;
}
