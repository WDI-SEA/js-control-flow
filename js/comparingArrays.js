const arr1 = [1, "a", 3, "e", 5, 7, 9, "i"];
const arr2 = [1, "a", 3, "e", 5, 7, 9, "i"];
const arr3 = [1, "a", 3, 5, "e", 7, 10, "i"];
const arr4 = [0, 2, 4, 6];

const compareArr = ([...x], [...y]) => {
  const arrXlength = x.length;
  const arrYlength = y.length;

  // now check for type, value and order
  if (arrXlength === arrYlength) {
    console.log("They are correct");
    // for (let i = 0; i)
  } else {
    console.log("They don't contain the exact same amount of characters");
  }

  // For (let i = 0; i < arr1.length-1; i++) {
  //  If (arr1[i] != arr3[i] {
  //    console.log
  // }
  // }
};

compareArr(arr1, arr2);

// **** Still working on this ****
