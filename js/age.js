const ages = [3, 4, 8, 13, 20];
ages.forEach(function (ages) {
  if (ages <= 3 && ages > -1) {
    console.log(`You are a infant`);
  } else if (ages >= 4 && ages <= 7) {
    console.log(`You are a toddler`);
  } else if (ages >= 8 && ages <= 12) {
    console.log(`You are a preteen`);
  } else if (ages >= 13 && ages <= 18) {
    console.log(`You are a teen`);
  } else {
    console.log(`You are a young adult`);
  }
});
