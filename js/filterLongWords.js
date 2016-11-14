// Write a program that will take an array of words. 
// Using a variable called maxLength, push words that are 
// less than the maxLength into a new array, and console.log 
// the value of maxLength.

// Requirements

// Your array of words should be stored in a variable, which can 
// be named whatever you like maxLength should be a positive number

var wordify = ["there", "is", "no", "place", "like", "home"];
var maxLength = 3;

function limitedWords(wordArry) {
  var maxedWords = [];

  for (var i = 0; i < maxLength; i++) {
    maxedWords.push(wordArry[i]);
  }
  console.log("New Array: " + maxedWords);
  console.log("Max Length: " + maxLength);
}