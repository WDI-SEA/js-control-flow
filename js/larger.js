let x = null
let y = null

function larger(x,y) {
  if (x >= y) {
    console.log('The larger number of ' + x + ' and ' + y + ' is ' + x)
  } else if (y >= x) {
    console.log('The larger number of ' + x + ' and ' + y + ' is ' + y)
  }
}

larger(2,1)