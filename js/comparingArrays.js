var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];
let a = arr1
let b = arr2
let c = arr3
let d = arr4

let compare1 = [a, b, c, d]
let compare2 = [a, b, c, d]
let x = Math.floor(Math.random()*4)
let y = Math.floor(Math.random()*4)

if(compare1[x].length == compare2[y].length){
    for(i = 0; i < arr1.length; i++){
        if(compare1[x][i] == compare2[y][i]){
         console.log(`${compare1[x][i]} is the same value as ${compare2[y][i]}!`);
    }
    else{
        console.log(`${compare1[x][i]} is not the same value as ${compare2[y][i]}!`)
    }
    }
}
else{
    console.log('They are not the same length. They will not be equal.')
}