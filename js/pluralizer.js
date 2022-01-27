let thing = 'elephant'
let count = 5

function pluralizer (count) {
  if (count === 1) {
    console.log(count + ' ' + thing)
  } else {
    console.log(count + ' ' + thing + 's')
  }
}

pluralizer(95)