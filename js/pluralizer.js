let thing = 'porcupine';
let count = 122;

if (thing === 'cat' && count === 1) {
  console.log(count + ' ' + thing)
} else if (thing === 'cat' && count > 1) {
  console.log(count + ' ' + thing + 's')
} else if (thing === 'dog' && count === 1) {
  console.log(count + ' ' + thing)
} else if (thing === 'dog' && count > 1) {
  console.log(count + ' ' + thing + 's')
} else {
  console.log ('where are all the cats and dogs??')
}