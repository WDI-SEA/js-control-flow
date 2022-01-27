const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function areEqual(arr1, arr2)
    {
        let n = arr1.length;
        let m = arr2.length;
 
        // If lengths of array are not equal means
        // array are not equal
        if (n != m)
            return false;
 
        // Sort both arrays
        arr1.sort();
        arr2.sort();
 
        // Linearly compare elements
        for (let i = 0; i < n; i++)
            if (arr1[i] != arr2[i])
                return false;
 
        // If all elements were same.
        return true;
    }

    if (areEqual(arr1, arr2))
        console.log("Yes");
    else
        console.log("No");