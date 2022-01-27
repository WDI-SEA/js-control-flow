// let x = 7
// let y = 8

// if (x > y) {
//   console.log(`The larger number of ${x} and ${y} is ${x}`)
// } else {
//   console.log(`The larger number of ${x} and ${y} is ${y}`)
// }

const larger = (x2, y2) => {
  let arr = [x2, y2];
  let largest = 0;

  for (i = 0; i <= largest; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(`The larger number of ${x2} and ${y2} is ${largest}`);
};

larger(5, 6);
