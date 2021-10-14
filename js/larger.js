let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

if (a > b) {
    console.log("The larger number of " + a + " and " + b + " is " + a)
} else if (a < b) {
    console.log("The larger number of " + a + " and " + b + " is " + b)
}
else {
    console.log ("They're even")
}