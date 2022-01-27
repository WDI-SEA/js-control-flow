const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

function compareArr(x,y){
  console.log(`Comparing ${x} and ${y} ....`)
  if(x.length === y.length){
  for(i = 0; i < x.length;){
    if(x[i] === y[i]){
      i++;
    }else{
      console.log('They are not equal!')
      return 0
    }
  }
  console.log('They are equal!')
}else{
  console.log('They are not equal!')
}
}

compareArr(arr4,arr1)