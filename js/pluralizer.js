var thing = 'dog';
var count = 2;

var pluralized = function(item, num) {
  // error check input
  if (typeof item !== 'string' || typeof num !== 'number' || num < 0) {
    return 'Invalid input. Thing must be string, count must be number >= 0.';
  }
  // Check for various quantities of 'things'
  var output = '';
  if (num === 0) {
    output = 'No ' + item + 's';
  } else if (num === 1) {
    output = num.toString() + ' ' + item;
  } else {
    output = num.toString() + ' ' + item + 's';
  }
  return output;
};

console.log(pluralized(thing, count));
