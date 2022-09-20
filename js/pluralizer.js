let thing = 'monkey';
let count = 30;
const vowels = ['a', 'i', 'o','e','u']
if (count > 1){
    if(thing.charAt(thing.length-1)=='s'){
        console.log('Please re-enter thing without an s ')
    }
    
    else if(thing.charAt(thing.length-1)=='y'){
        if(vowels.includes(thing.charAt(thing.length-2))){
            thing =thing.concat("s");            
            console.log(count +" "+ thing)

        }else{
            thing=thing.replace("y","i").concat("es");
            console.log(count +" "+ thing)
        }
    }
    else{  
        console.log(count +" "+ thing)
        thing =thing.concat("s");
    }

}
else{
    console.log(count + " " + thing)
}