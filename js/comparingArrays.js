const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 12, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// variables to compare two arrays with eah other
const arrChoice1 = arr3
const arrChoice2 = arr2


if (arrChoice1.length !== arrChoice2.length){
console.log("NOT Equal Arrays :( they have diffrent lengths")
}

else{
  
  let isEqual = ""
  
  for (let i = 0; i < arrChoice1.length; i++) {
    
    if (arrChoice1[i] !== arrChoice2[i]) {
      isEqual = "NOT EQUAL"
    }
    else{
      isEqual = "EQUAL"
    }

  }
  
  console.log(isEqual);

}