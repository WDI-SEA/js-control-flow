let thing = 'cat'
let count = 0

if (count === 1) {
  console.log(`There is one ${thing}.`)
} else if (count <= 0) {
  console.log(`There are no ${thing}s.`)
} else if (count > 1) {
  console.log(`There are ${count} ${thing}s.`)
} else {
  console.log('Something went wrong! Please enter a valid number.')
}