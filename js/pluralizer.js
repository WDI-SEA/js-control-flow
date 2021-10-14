let dog = 'dog';

let pluralize = (num) => {
  if (num <= 1) {
    console.log(`${num}${dog}`);
  } else if (num > 1) {
    console.log(`${num}${dog}s`);
  }
};
// Please enter your number in the () below
pluralize(2);
