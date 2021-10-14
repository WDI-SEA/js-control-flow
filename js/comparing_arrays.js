// Comparing Arrays
// Because Arrays are reference variables, they actually point to locations in memory. As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:

// var b = [1,2,3];
// console.log(a === b);  // This will never be true
// Using any of the loop constructs we've learned, write a program that will check two arrays for equality. You may consider two arrays to be "equal" if and only if they contain exactly the same number of items and each item is the same type, same value, and in the same order in both arrays. Some arrays are provided below for your testing purposes. Be sure to test with different combinations to make sure your script fully works:

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i', 6];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i', 6];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i', 6];
const arr4 = [0, 2, 4, 6];
const arr5 = [0, 2, 4, 6];


let ray1 = arr4
let ray2 = arr5

//ensure that the arrays to be compared meet the equal length requirement
if (!(ray1.length === ray2.length)) {
  console.log("The two arrays are not equivalent")

} else if (ray1.length === ray2.length) {
  //iterate through the arrays, comparing the values at each position
  for (var i = 0; i < (ray1.length - 1);) {
    
    if (ray1[i] === ray2[i]) {
     
      
        i++
    
    } else if (!(ray1[i] === ray2[i])) {
        i = ray1.length
    }

  }
  //print the results
  if (i === (ray1.length - 1)) {
    console.log("Success! The two arrays are equivalent!")
  } else if (i === ray1.length)
    console.log("The two arrays are not equivalent")

  //we know whether the arrays are equivalent based on the value of i 
  //when we exited the for loop
}