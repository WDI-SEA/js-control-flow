let num1 = 8;
let num2 = 8;

if (typeof(num1)==Number && typeof(num2)==Number){
    if(num1>num2){
        console.log("The larger number of "+ num1 +" and "+ num2 +" is "+ num1)
    }
    else if(num1 == num2){
        console.log("You've entered equal numbers")
    }
    else{
        console.log("The larger number of "+ num1 +" and "+ num2 +" is "+ num2)

    }
}else{
    console.log('Please enter numeric values')
}