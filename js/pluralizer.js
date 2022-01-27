let thing = 'meatball'
let count = 2.3

count = Math.floor(count)
if(count > 0 && count === 1){
  console.log(count +" "+ thing)
}else if(count > 0 && count > 1){
  console.log(count +" "+ thing + "s")
}else{
  console.log('Please input a  number greater than 0')
}