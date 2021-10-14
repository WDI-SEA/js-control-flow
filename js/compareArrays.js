// if the arr lengths don't match, the arrays don't match

if(arr1.length !== arr2.length) {
  console.log("The arrays are not the same")
} else {
  let sameCount = 0
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log("They are not the same")
      break
    } else {
      sameCount++
      console.log("This is sameCount: ", sameCount)
      if (sameCount === arr1.length) {
        console.log("They are the same!")
      }
    }
  }
}









function compareArrays(arr1,arr2){
    for (let i = 0; i < arr1.length; i++){
     for(let j = 0; j < arr2.length; j++) {
       console.log(arr1[i], arr2[j])
      if(arr1[i] === arr2[j]) console.log("true")
       else return false
      }
     } 
    }
  compareArrays([1,2,3],[1,2,4])