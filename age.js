let allAge = 20;
switch(true) {
  case (0<=allAge && allAge<=3):
  console.log('This is a ' + allAge + ' year old infant!');
  break;
case (4<=allAge && allAge<=6):
console.log('This is a ' + allAge + ' year old toddler!');
break;
case (7<=allAge && allAge<=10):
console.log('This is a ' + allAge + ' year old child!');
break;
case (11<=allAge && allAge<=13):
console.log('This is a ' + allAge + ' year old preteen!');
break;
case (14<=allAge && allAge<=17):
console.log('This is a ' + allAge + ' year old teenager!');
break;
case (18<=allAge && allAge<=20):
console.log('This is a ' + allAge + ' year old young adult!');
break;
default:
console.log('How old are you??');
break;
}
