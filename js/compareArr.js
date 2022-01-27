const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 2, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

let first = arr1;
let second = arr2;

if(first.length === second.length){
    for(let x = 0; x < first.length;){
      if (first[x] === second[x]){
        x++
      } else {
        console.log("They are not equal!")
        return;
      } 
    } console.log("They are equal!")
  } else {
    console.log("They are not equal!")
}
  


// const compareArr = (first, second) => {
//     if( first.length === second.length ){
//       for(let x = 0; x < first.length;){
//         if(first[x] === second[x]){
//           x++;
//   //       break;
//         } else {
//           console.log("They are not equal")
//           return;
//         }
//       }console.log("They are equal")
    
    
//     } else {
//       console.log("They are not equal")
//     }
//   }
  
//   compareArr(arr1,arr4)






