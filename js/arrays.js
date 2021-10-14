// ### Comparing Arrays
// Because Arrays are reference variables, they actually point to locations in memory. As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

// ```var a = [1,2,3];
// var b = [1,2,3];
// console.log(a === b);  // This will never be true
// ```

// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:
// ```
// var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
// var arr4 = [0, 2, 4, 6];
// ```

//Define two array's with same values and types
const arrayOne = [1,2,3,4,5,'6',7,8,9,10];
const arrayTwo = [1,2,3,"four",5,'6',7,8,9,'10'];

//Define a for loop to iterate through each element of the first array and check for strict equality of the second array's respective element...if true, print both.
for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
        console.log(`arrayOne's ${arrayOne[i]} is equal to arrayTwo's ${arrayTwo[i]}.`);
    } else {
        console.log(`arrayOne's ${arrayOne[i]} is not equal to arrayTwo's ${arrayTwo[i]}.`);
    }
}