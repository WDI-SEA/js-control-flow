// Write a program that takes an input like...
//
// var thing = 'cat';
// var count = '5';
// and output the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog".
//
// Requirements
//
// Your program should pluralize the word based on an integer (count)

function pluralizer(thing, count){
  var numCount = parseInt(count);
  var result = "";

  if(numCount === 1) {
    result = count + " " + thing;
  } else if (numCount > 1 || numCount === 0) {
    result = count + " " + thing + "s";
  } else if (numCount < 0) {
    result = "please enter a positive number";
  }

  return result;
}

console.log(pluralizer("cat", "5"));
console.log(pluralizer("cat", "0"));
console.log(pluralizer("cat", "1"));
console.log(pluralizer("cat", "-10"));
