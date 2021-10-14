/*
Comparing Arrays
Because Arrays are reference variables, they actually point to locations in memory. As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

var b = [1,2,3];
console.log(a === b);  // This will never be true
Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" 
if and only if they contain exactly the <<same number of items>> and <<each item is the same type if same value>> and in the <<same order>> in both arrays. 

PSEUDOCODE:

if arrays are not same length 
    return false

if they are of the same length
for i in array
    if values in each array are not strictly equal
        return false
    otherwise
        return true
return true

Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:
*/




/* DRIVER CODE */
var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

if (arr1.length !== arr2.length) {
    console.log("Not Equal.")
}

if (arr1.length === arr2.length) {
    for(i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("Not Equal")
        } else {
            console.log("Equal")
        }
    } 
    console.log("The Two Arrays are Equal")
}

