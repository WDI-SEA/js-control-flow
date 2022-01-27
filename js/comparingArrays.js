
// const a = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const b = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const c = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const d = [1, 'a', 3, 'e', 5, 7, 9, 'i'];



const a = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const b = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const c = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const d = [0, 2, 4, 6];

let aValue = a.length

if (a.length === b.length && a.length === c.length && a.length === d.length){

  if (a[0] === b[0] || a[0] === c[0] || a[0] === d[0]){

    if (a[1] === b[1] || a[1] === c[1] || a[1] === d[1]){
      
      if (a[2] === b[2] || a[2] === c[2] || a[2] === d[2]){

        if (a[3] === b[3] || a[3] === c[3] || a[3] === d[3]){

          if(a[4] === b[4] || a[4] === c[4] || a[4] === d[4]){

            if(a[5] === b[5] || a[5] === c[5] || a[5] === d[5]){

              if (a[6] === b[6] || a[6] === c[6] || a[6] === d[6]){

                if (a[7] === b[7] || a[7] === c[7] || a[7] === d[7]){
                  console.log("these arrays are equal")
          
                } else {
                console.log("The arrays are different")
                }
              } else {
              console.log("The arrays are different")
              }
            } else {
            console.log("The arrays are different")
            }
          } else {
          console.log("The arrays are different")
          }
        } else {
        console.log("The arrays are different")
        }
      } else {
      console.log("The arrays are different")
      }
    } else {
    console.log("The arrays are different")
    }
  } else {
    console.log("The arrays are different")
  }
} else {
  console.log("The arrays are different")
}
