let age = 18

// if (19 <= age && age <= 20) {
//     console.log('young adult')
// } else if (13 <= age && age <= 18) {
//     console.log('teen')
// } else if (10 <= age && age <= 12) {
//     console.log('preteen')
// } else if (3 <= age && age <= 9) {
//     console.log('child')
// } else if (age === 2) {
//     console.log('toddler')
// } else {
//     console.log('infant')
// }

switch(true) {
    case age >= 19 && age <= 20:
        console.log('young adult')
        break;
    case age >= 13 && age <= 18:
        console.log('teen')
        break;
    case 10 <= age && age <= 12:
        console.log('preteen')
        break;
    case 3 <= age && age <= 9:
        console.log('child')
        break;
    case 2:
        console.log('toddler')
        break;
    default:
        console.log('infant')
}