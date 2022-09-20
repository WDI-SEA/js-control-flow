var a = Math.floor((Math.random() * 100) + 1);
var b = Math.floor((Math.random() * 100) + 1);

if (a===b) {
  console.log(a + " equals " + b)
} else if (a>b) {
  console.log("The larger number of " + a + " and " + b + " is " + a)
} else if (a<b) {
  console.log("The larger number of " + b + " and " + a + " is " + b)
} else {
  console.log("error")
}