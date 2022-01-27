let thing = ''
let count = 1
const readline = require('readline-sync')
thing = readline.question(`Enter thing :\n`)
count = readline.question(`Enter a number :\n`)


if (count > 1) {
  console.log('Plural form of ' +  thing + ' is ' + thing + 's' + '.')
} else {
  console.log(count + ' ' + thing + ' is ' + count + ' ' + thing + '.')
}
