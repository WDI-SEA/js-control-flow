


// Rewrite your first answer in age.js using a switch statement!


// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);


const age = 16;

switch (age)  {
    case 1:
    case 2:
        console.log('Infant');
        break;
    case 3:
    case 4:
    case 5: 
        console.log('Toddler');
        break;
    case 6:
    case 7:
    case 8: 
        console.log('Child');
        break;
    case 9:
    case 10:
    case 11: 
         console.log('Preteen');
         break;
    case 13:
    case 14:
    case 15:  
    case 16:
    case 17: 
        console.log('Teen');
        break;
    default:
        console.log('Young Adult');
}