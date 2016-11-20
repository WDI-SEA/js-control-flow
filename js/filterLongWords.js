// Write a program that will take an array of words. 
// Using a variable called maxLength, push words that are 
// less than the maxLength into a new array, and console.log 
// the value of maxLength.

// Requirements

// Your array of words should be stored in a variable, which can 
// be named whatever you like maxLength should be a positive number

var wordify = ["there", "is", "no", "place", "like", "home"];

function filterLongWords(wordArry, max) {
  var maxedWords = [];

  for (var i = 0; i < wordArry.length; i++) { // iterate over array
  	// check if iteratee (the word) has fewer than maxLength characters
  	if (wordArry[i].length < max) {
	    maxedWords.push(wordArry[i]);
  	}
  }
  console.log(maxedWords);
  console.log("Max Length: " + max);
}
filterLongWords(wordify, 5);