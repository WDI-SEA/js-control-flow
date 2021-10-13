var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];



for(i=0; i < arr1.length - 1; i++) {
    if(arr1[i] == arr2[i]) {
        var x = true
    }
    else {
        var x = false;
        break;
    }
}

if(Boolean(x)){
  console.log('Compaired arrays are equal')
}
else{
  console.log('Compaired arryas are NOT equal')
}