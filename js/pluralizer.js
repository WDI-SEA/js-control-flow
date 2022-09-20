let thing = "cat";
let count = 5;

while (count<=5 && count>=0) {
  if (count>=2 || count==0) {
    if (count==4) {
      console.log(count + " " + thing.replace("cat", "bird") + "s");
    } else if (count==2) {
      console.log(count + " " + thing.replace("cat", "elephant") + "s");
    } else {
     console.log(count + " " + thing + "s")   
    }
  } else {
    console.log(count + " " + thing)
  }
  count--
}