let x = 10
let y = 15
switch (true) {
  case (x > y):
    console.log('The larger number of ' + x + ' and ' + y + ' is ' + x)
    break
  case (y > x):
    console.log('The larger number of ' + x + ' and ' + y + ' is ' + y)
    break
  case (x === y):
    console.log('The larger number of ' + x + ' and ' + y + ' is neither. They are the equal.')
}