let thing = 'wolf';
let count = 8;

// if count is zero or a negative number
if(count <=0 ){
  console.log("Sorry, use only positive integers!")
}
//singular 
else if(count == 1){
  console.log(count + " " + thing)
}
//plural 
else if(count > 1){
  console.log(count + " " + thing + "s")
}