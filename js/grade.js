/*Age Categories
Infant: 0-1
Toddler: 2-3
Child: 4-9
Preteen: 10-12
Teen: 13-16
Young Adult: 17-20
*/
let age = Math.ceil(Math.random()*20);

if (age <= 1) {
    console.log(`Your child is a ${age} year old, therefore an Infant.`)
} else if (age > 1 && age <= 3) {
    console.log(`Your child is ${age} years old, therefore a Toddler.`)
} else if (age > 3 && age <= 9) {
    console.log(`Your child is ${age} years old, therefore a Child.`)
} else if (age > 9 && age <= 12) {
    console.log(`Your child is ${age} years old, therefore a Preteen.`)
} else if (age > 12 && age <= 16) {
    console.log(`Your child is ${age} years old, therefore a Teen.`)
} else {
    console.log(`Your child is ${age} years old, therefore a Young Adult.`)
}


// console.log('This is using the Switch Statement');


// switch (age) {
//     case age <= 1: 
//     console.log(`Your child is a ${age} year old, therefore an Infant.`);
//     break;
//     case age > 1 && age <= 3:
//     console.log(`Your child is ${age} years old, therefore a Toddler.`);
//     break;
//     case age > 3 && age <= 9:
//     console.log(`Your child is ${age} years old, therefore a Child.`);
//     break;
//     case age > 9 && age <= 12:
//     console.log(`Your child is ${age} years old, therefore a Preteen.`);
//     break;    
//     case age > 12 && age <= 16:
//     console.log(`Your child is ${age} years old, therefore a Teen.`);
//     break;
//     default:
//     console.log(`Your child is ${age} years old, therefore a Young Adult.`);
// }