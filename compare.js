const a = [1, 'a', 3, 'e', 5, 7, 9, 'i']
const b = [1, 'a', 3, 'e', 5, 7, 9, 'i', 9]

let bo = true
for(let i = 0; i< a.length; i++){
  if(!(a[i]===b[i])){
    bo = false;
  }
}
console.log('Arrays are the same: ' + (bo && a.length==b.length))