// // part1

// const ageStages = 30


//     // i should go young and then older
// if (ageStages <= 2) {
//     console.log('youre infant');
// } else if (ageStages <= 4){
//     console.log('youre a toddler')
// } else if (ageStages <= 10) {
//     console.log('youre a child')
// } else if (ageStages <= 13) {
//     console.log('youre preteen')
// } else if (ageStages <= 16) {
//     console.log('youre a teen')
// } else if (ageStages <= 20) {
//     console.log('youre a young adult')
// } else {
//      console.log('youre an adult')
// }


// bonus

let age = 50

switch (age) {
    case 0:
    case 1:
      console.log("Aww, you're an infant 🧸");
      break;
    case 2:
    case 3:
    case 4:
      console.log("Toddler! So BIG 🐣");
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      console.log("You're a big kid now! 🦒");
      break;
    case 10:
    case 11:
    case 12:
      console.log("Preteen! Practically a grownup!🤸🏽‍♀️");
      break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log("Teen! You're grounded, jk 🙈");
      break;
    case 18:
    case 19:
    case 20:
      console.log("Young adult? Almost an adult! 🏆");
      break;
    default:
      console.log("Adult, age is but a number 🎮");
      break;
}
      


// const infant = [0, 1]
// const toddler = [2, 3, 4]
// const child = [5, 6, 7, 8, 9]
// const preteen = [11, 12]
// const teen = [13, 14, 15, 16, 17]
// const youngAdult = [18, 19, 20]

// ageStage = 1

// switch (ageStage) {
//     case (jQuery.inArray(num, infant)):
//         console.log("Aww, you're an infant 🧸");
//         break;
//     case (jQuery.inArray(num, toddler)):
//         console.log("Aww, you're an 🧸");
//         break;
//     case (jQuery.inArray(num, child)):
//         console.log("Aww, you're an i 🧸");
//         break;
//     case (jQuery.inArray(num, preteen)):
//         console.log("Aww, you're an in 🧸");
//         break;
//     case (jQuery.inArray(num, teen)):
//         console.log("Aww, you're an inf 🧸");
//         break;
//     case (jQuery.inArray(num, youngAdult)):
//         console.log("Aww, you're an infa 🧸");
//         break;
//     default:
//         console.log("Aww, you're an infan 🧸");
//         break;
// }

// const ageRange= {
//   infant: [0, 1],
//   toddler: [2, 3, 4],
//   child: [5, 6, 7, 8, 9],
//   preteen: [10, 11, 12],
//   teen: [13, 14, 15, 16, 17],
//   youngAdult: [18, 19, 20],
// };

// let age = 10

// console.log(ageRange.preteen.includes(age))

// function checkAge(age) {
//   if (ageRange.infant.includes(age)){
//     age = infantRange
//   }