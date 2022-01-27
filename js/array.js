let variable = true 

for (i = 0; i < arr1.length; ++i) {
  if (arr1[i] !== arr2[i]) {
    console.log("This is not true")
    variable = false
    break
  } 
} 
if (variable) {
  console.log("This is true")
}
