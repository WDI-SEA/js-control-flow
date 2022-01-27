let arr1 = [1,2,3,6]
let arr2 = [1,2,3]

for (i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    console.log("This is not true")
    break
  } 
} if (arr1[i] == arr2[i]){
  console.log("This is true")
}