let thing = 'cat';
let count = 4;

function pluralizeThing(thing, pluralThing, count) {
  return count > 1 ? pluralThing : thing;
}
console.log(count, pluralizeThing("cat", "cats", count));
