let arr1 = [2, 8, 6, 9]
let arr2 = [2, 8, 6, '9']



if(arr1.length != arr2.length) {
  arrayTorF = false;
}else{
  arrayTorF = true;
}

  for (let i = 0; i < arr2.length; i++){
    
    if (arr1[i] !== arr2[i]) {
  arrayTorF = false;
    }else{
      arrayTorF= true;
    }
  
  
  }
  


if (arrayTorF) {
  console.log('These arrays are equal!');
} else {
  console.log('These arrays are not equal!')
}






