let age = 22;
if(age>5){
    console.log("hi")
}
if(age<1){
console.log("Infant")
}
else if(age>=1 && age<5){
    console.log("Toddler")
}
else if(age >=5 && age<9){
    console.log("Child")
}
else if(age >=9 && age<12){
    console.log("Pre-teen")
}
else if(age >=12 && age<18){
    console.log("Teenager")
}else{
    if(age<0 || age>20){
        console.log("Range out of bounds")
    }else{
        console.log("Young adult")

    }
}



