let thing = "cat";
let count = 10;

function pluralize(){
if(count>1){
  thing = thing + "s"
}
  else{
    thing = thing
  }

  console.log(thing)
}

pluralize()