//Write a program that reads two Number variables
 //and prints which one is 
 //greater. (e.g. "The larger number of 7 and 3 is 7")

//**Requirements**
//* Your program should maintain two variables
//* It should correctly identify which is larger and print 
//that result

 var x = 5;
 var y = 6;
 function whatIsBigger (){
    if  (x > y) {
        Console.log(" The larger number out of " + x +"and"+ y +"is "+ x );

    }
    else{
        console.log(" The larger number out of " + x +"and"+ y +"is "+ y );
    }
 };

 console.log(whatIsBigger);

