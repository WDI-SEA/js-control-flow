let thing = 'cat'
let count = 5

let thisOne = [...thing, 's'].join(',')
console.log(thisOne)

if(count > 1) {
    let together = ([...thing, 's']).join('')
console.log(together)
} else {
    console.log(thing)
}

