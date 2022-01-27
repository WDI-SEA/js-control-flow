let thing = "deadly sin"
let count = 7;

let thingArray = thing.split("")
let lastLetter = thingArray[thingArray.length -1]


if(count > 1) {
  if(thing === "ox"){
    console.log(`${count} ${thing}en`)
  } else if (lastLetter === "o" || lastLetter === "x" ){
    console.log(`${count} ${thing}es`)
  } else if (lastLetter === "y") {
    thingArray.splice(-1)
    thing = thingArray.join("")
    console.log(`${count} ${thing}ies`)
  } else {
    console.log(`${count} ${thing}s`)
  }
} else {
 console.log(`${count} ${thing}`)
}


