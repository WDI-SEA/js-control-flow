let arr1 = [1, 2, 3]
let arr2 = [1, 2, '3']
let isEqual=' '

if(arr1.length === arr2.length){
  for (let i = 0; i < arr1.length; i++) {
  if (arr1[i]===arr2[i]){
    isEqual = 'arrays are equal'
  }
  else {
    isEqual = 'arrays are not equal'
  }
}

}

else {
  isEqual = 'arrays are not equal'
}

console.log(isEqual)