
function comparator() {
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)
    if (num1 > num2) {
      console.log("The larger number of " + num1 + " and " + num2 + " is " + num1)
    }
    else if (num1 == num2) {
      console.log("The numbers " + num1 + " and " + num2 + " are equal")
    }
    else {
      console.log("The larger number of " + num1 + " and " + num2 + " is " + num2)
    }
  }
  
  comparator()
  
  