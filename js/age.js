// all this is declaring is an age
let age = 0

// this code block looks at the age you choose and gives a responding depending on the number.
// if (age > 0 && age <= 1) {
//     console.log('What a cute infant! You get tons of attention')
// }else if (age >= 2 && age <= 4) {
//     console.log('You are now a toddler! A little less attention which can lead to grumpyness!')
// }else if (age >= 5 && age <= 7) {
//     console.log('You are now a child congrats!! You now want to have every toy which is denied!')// <-- I'm a child at heart, at least I try to be.
// }else if (age >= 8 && age <= 12) {
//     console.log('You are now a preteen! Are girls wierd or cool?')
// }else if (age >= 13 && age <= 17) {
//     console.log('You are now a teenager, and responsiblity is now at your doorstep!')
// }else if (age >= 18 && age <= 20) {
//     console.log('You are now a young adult, which meens your future is in your hands!')
// }else if (age < 0) {
//     console.log('You do not exist how sad maybye someday you will be among the living.')
// }else {
//     console.log('You are an adult! Again with limitless possiblities, and do not let anyone tell you otherwise!')
// }

// Well I figured this out but I'm not sure why it has to be switch (true) instead of switch (age) in the link it had switch (expr) so I thought I had to do age.
switch (true) {
    case (age > 0)&&(age <= 1):
        console.log('What a cute infant! You get tons of attention')
        break;
    case (age >= 2)&&(age <= 4):
        console.log('You are now a toddler! A little less attention which can lead to grumpyness!')
        break;
    case (age >= 5)&&(age <= 7):
        console.log('You are now a child congrats!! You now want to have every toy which is denied!')// <-- I'm a child at heart, at least I try to be.
        break;
    case (age >= 8)&&(age <= 12):
        console.log('You are now a preteen! Are girls wierd or cool?')
        break;
    case (age >= 13)&&(age <= 17):
        console.log('You are now a teenager, and responsiblity is now at your doorstep!')
        break;
    case (age >= 18)&&(age <= 20):
        console.log('You are now a young adult, which meens your future is in your hands!')
        break;
    case (age <= 0): // had to make this <= to work properly instead of just < 0
        console.log('You do not exist how sad maybe someday you will be among the living.')
        break;
    default:
        console.log('You are an adult! Again with limitless possiblities, and do not let anyone tell you otherwise!')
}