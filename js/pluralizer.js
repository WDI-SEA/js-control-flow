const things = ["dog", "cat", "parrot"]
let counts = Math.floor(Math.random()*10)

function pluralizer(thing, count){
  if(count === 1 ){
    console.log(count + " " + thing)
  }else if(count>1){
    console.log(count + " " + thing + "s")
  }else{
    console.log("invalid input!  need a count of animals!")
  }
}
let randomIndex = Math.floor(Math.random()*things.length)
pluralizer(things[randomIndex],counts)