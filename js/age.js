let age = 0

switch(true) {
  case (age>=20):
    console.log('Young Adult');
    break;
  case (13<=age && age<=19):
    console.log('Teenager');
    break;
  case (9<=age && age<=12):
    console.log('Pre-teen');
    break;
  case (5<=age && age<=8):
    console.log('Child');
    break;
  case (1<=age && age<=4):
    console.log('Toddler');
    break;
  default:
    console.log('infant');
    break;
}

