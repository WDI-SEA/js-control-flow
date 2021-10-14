// # JS Control Flow

// ## Getting Started
// * Fork and clone this repository
// * Use a separate file for each exercise. This will make it easier to keep track of solutions
// * Write JavaScript code to obtain the data prompted by each question
// * Run each file by typing `node js/nameOfFile.js` if you have already installed `node`. Otherwise, just test your code in Repl.it, Codepen, or a similar sandbox environment!
// ---

// ### age.js
// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

// **Requirements**
// * Your program should have a variable to store the age (an integer between 0 and 20)
// * For the age categories, you may use whatever aging scale you'd like
  let age = 16;
  switch (true){
  
    case age <= 1:
    console.log('infant')
    break;
  
    case age > 1 && age <= 3:
    console.log('toddler')
    break;

    case age > 3 && age <= 15:
    console.log ('child')
    break;

    case age > 15 && age <= 20:
    console.log('young adult')
    break;
}


// ### pluralizer.js
// Write a program that starts like...

// ```js
// var thing = 'cat';
// var count = 5;
// ```
// and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

// **Requirements**
// * Your program should pluralize the word based on an integer (`count`)
var thing = 'cat';
var count = 5;
var pluralizedThing =  `${count} ${thing}s`
console.log(pluralizedThing)
// ---

// ### tempConvert.js
// Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

// **Requirements**
// * Your program should store an integer (in Fahrenheit) in a variable.
// * You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
// * Convert from F to C or K based on the indicator variable.
// * The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"
  var f = 10
  var k = false
  var c = true
  const celciusFormula = (f - 32) * (5/9); 
  const kelvinFormula = celciusFormula + 273.15;
  if(k === true && c === false){
    console.log(`${f} degrees Fahrenheit is ${kelvinFormula} degrees Kelvin`)
  } else {
    console.log(`${f} degrees Fahrenheit is ${celciusFormula} degrees Kelvin`)
  }



// ---

// ### larger.js
// Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")


// **Requirements**
// * Your program should maintain two variables
// * It should correctly identify which is larger and print that result

var num1 = 10
var num2 = 8
var greaterNumber = num1;
var smallerNumber = num2;
if(greaterNumber < num2){
  greaterNumber = num2;
  smallerNumber = num1
  }
console.log(`The larger number of ${greaterNumber} and ${smallerNumber} is ${greaterNumber}`)


// ### translator.js
// Write a program that reads a variable with language code and prints the translation of "Hello World" for that language.

// **Requirements**
// * You should have a variable for the language code (e.g. "es", "de", "fr", "en").
// * Your program should print the translation of "Hello World" based on the language code in the variable.
// * It should support at least 3 languages
// * Make sure to test with the different languages you choose.
// * (Feel free to Google the translation if you aren't fluent.)
var languageCode = "fr";
if(languageCode === "de"){
  console.log("Hallo Welt")
}
else if(languageCode === "es"){
  console.log("Hola Mundo")
}
else if(languageCode === "fr"){
  console.log("Bonjour le monde")
}
console.log(languageCode);
// ---
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
var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

let sameLength = arr1.length === arr2.length
  let sameValues = true;
  for(let i = 0; i < arr1.length; i++ ){
      if(arr1[i] !== arr2[i]){
          sameValues = false;
          break;
      }
  }
  if(sameValues && sameLength){
    console.log('arr1 is equal to arr2')
  } else {
    console.log('arr1 is not equal to arr2')
  }
  
 
// ---

// ## Bonus

// Rewrite your first answer in `age.js` using a [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)! 

// ---

// ## Licensing
// 1. All content is licensed under a CC-BY-NC-SA 4.0 license.
// 2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
