/* ### Comparing Arrays
Because Arrays are reference variables, they actually point to locations in memory. As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

```javascript
let a = [1,2,3];
let b = [1,2,3];
console.log(a === b);  // This will never be true
```

Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:

```javascript
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6]; */

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [0, 2, 4, 6];
let switcher = 0

    for (let i = 0; i < arr1.length-1; i++) {
        if (arr1[i] != arr2[i]) { 
            console.log('Array does not contain any values.')
            switcher = 1
            break
        }
     } if (switcher == 0) {
        console.log('Array contains some values.')
     }
