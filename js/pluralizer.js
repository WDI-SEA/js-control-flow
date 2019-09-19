let thing = 'dog',
  // Generate a random number between 1 - 10
  count = Math.ceil(Math.random() * 10),
  // Print either is or are
  term = (count > 1) ? "are" : "is",
  // If count is greater than 1 then make 'thing' plural
  pluralize = (count > 1) ? `${thing}s` : thing;

console.log(`There ${term} ${count} ${pluralize}.`);