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