var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
   
   for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]){
      console.log("These array values are not equal")
  } else {
    console.log("These array values are equal")
  }
}