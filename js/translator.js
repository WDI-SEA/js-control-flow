
const translator = language => {
    switch(language){
     case 'en':
     return 'Hello World';
     break;
     case 'fr':
     return 'Bonjour Le Monde';
     break;
     case 'sp':
     return 'Hola Mundo';
     break;
   
    }
}

console.log(translator('en'));

// Comparing Arrays
const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// checking to see if the length of the arrays is the same, if it is then it runs the code block inside 
if (arr1.length === arr2.length) {
  
  //this for loop does for(start iterating at 0; stop iterating once the array ends; iterate)
    for (let i = 0; i < arr1.length; i++) {

 //the code block inside checks to see if the variable at arr1[i] is equal to variable at arr2[i] && this iterates over every variable to check to see if the value type is the same in the two arrays. 
    if (arr1[i] === arr2[i]) {
     
     // if those conditions are met same value, same data type then it will console log the message below to the terminal 
        console.log("These arrays the same");
        break
    } else{
        
        // if those conditions are not met the message below will return ot the console
        console.log("These arrays are not the same");
    }
  }
}
