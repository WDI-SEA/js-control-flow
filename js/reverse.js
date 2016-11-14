function reverseWord (word) {
  var split = word.split("");
  var reversedWord = "";
  for (var i = split.length; i >= 0; i--) {
  reversedWord += split[i];
  }
  return(reversedWord);