const num1 = 5
const num2 = 50

switch(true) {
    case(num1 > num2):
        console.log(`The larger between ${num1} and ${num2}is ${num1}`)
        break
    case(num2 > num1):
        console.log(`The larger between ${num1} and ${num2} is ${num2}`)
        break    
    case (num1 === num2):
        console.log)(`The two numbers are equal`)
        break
    default:
        console.log(`invalid data`)
        break
}









// let a = 1
// let b = 2
function largerOfTwo(a,b){
    if (a > b){
    console.log("The larger number of " + a + " and " + b + " is " +a)
    } else {
    console.log("The larger number of " + a + " and " + b + " is " +b)}
    
    }
    largerOfTwo(7,3)

    
