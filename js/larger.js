// Write a program that reads two Number variables and prints which one is greater. 
// (e.g. "The larger number of 7 and 3 is 7")

// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

function printGreater(x, y) {
    let greater = x;
    if (y > x) {
        greater = y;
    }
    console.log(`The larger number of ${x} and ${y} is ${greater}`)
}

printGreater(3,1);