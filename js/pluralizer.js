var thing = 'turtle';
var count = '2';

var pluralizer = function () {
  var num = parseInt(count);
  if (num === 1){
    console.log(thing);
  } else {
    console.log(thing + 's');
  }
};
 pluralizer();







 // better coding, less errors
 // placing parameters instead of having variables outside the function

 var pluralize = function (item, quanity) {
    if (quanity === 1){
    console.log(item);
  } else {
    console.log(item + 's');
  }
};
// same as above but it uses parameters rather than external variables
pluralize('dog', 4);
