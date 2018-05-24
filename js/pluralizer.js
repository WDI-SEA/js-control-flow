
var thing = 'cat';
var count = 5;

switch(true) {
  case (count === 1):
  console.log(count + ' ' + thing);
  break;
  case (count === 2):
  console.log(count + ' ' + thing + 's');
  break;
  case (count === 3):
  console.log(count + ' ' + thing + 's');
  break;
  case (count === 4):
  console.log(count + ' ' + thing + 's');
  break;
  case (count === 5):
  console.log(count + ' ' + thing + 's' + '...' + ' ' + "You're a cat hoarder!");
  break;
}
