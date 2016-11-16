// Write a program that will take a hardcoded string, and console log the reversed version of it.

// Requirements

// You must use a for loop. No .reverse()
// You may use the string below
// var inputString = 'building';

function reverseWord (word) {
  var split = word.split("");
  var reversedWord = "";
  for (var i = split.length - 1; i >= 0; i--) {
  reversedWord += split[i];
  }
  return(reversedWord);
}