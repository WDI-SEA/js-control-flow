// for(let i=0; i<21; i++){
//     listCategory(i)
// }
// function listCategory(age){
// if(21<=age && age > 16){
//     console.log('young adult')
//     }else if(age >12){
//         console.log('preteen')
//     }else if(age >4){
//         console.log('child')
//     }else if(age >1){
//         console.log('toddler')
//     }else if(age >0){
//         console.log('infant')
//     }
// }

function listCategory(age){
    if(age > 20){
        console.log('adult')
        }else if(age >16){
        console.log('young adult')
        }else if(age >13){
        console.log('teen')
        }else if(age >10){
            console.log('preteen')
        }else if(age >4){
            console.log('child')
        }else if(age >1){
            console.log('toddler')
        }else if(age >0){
            console.log('infant')
        }
    }
    // can enter any number between 0-20
    listCategory(14)


    //bonus -- switch

    let age=17

switch(true) {
      case age >= 21:
        console.log('Adult')
        break;
    case age >= 17 && age <= 20:
        console.log('young adult')
        break;
    case age >= 14 && age <= 16:
        console.log('teen')
        break;
    case 11 <= age && age <= 13:
        console.log('preteen')
        break;
    case 5 <= age && age <= 10:
        console.log('child')
        break;
    case 2 <= age && age <= 4:
        console.log('toddler')
        break;
    default:
        console.log('infant')
} 

