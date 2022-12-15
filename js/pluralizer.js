let animal = 'red panda'
let count = 0

// code block looks at the count the tells you different things depending on the number
if (count > 1) {
    console.log(`You have ${count} ${animal}s`)
}else if (count === 1) {
    console.log(`You have ${count} ${animal}`)
}else if (count < 1) {
    console.log(`You have eliminated your world of animals how could you!!!`)
}