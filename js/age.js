age=11

if(age <= 2){
  console.log(`You're a infant`)
} else if ( age <= 5){
  console.log(`You're a toddle`)
} else if (age <= 10){
  console.log(`You're a child`)
}
 else if (age <= 12){
  console.log(`You're a pre-teen`)
}
 else if (age <= 19){
  console.log(`You're a teenager`)
}
 else if (age >= 20){
  console.log(`You're a Young Adult`)
}

let age2 = 26
switch (true){
  case (age2 < 2):
  console.log(`You're a infant`);
  break;
  case (age2 <= 5):
  console.log(`You're a toddler`)
  break;
  case (age2 <= 10):
  console.log(`You're a child`);
  break;
  case (age2 <= 12):
  console.log("You're a pre-teen");
  break;
  case (age2 <= 19):
  console.log("You're a teenager");
  break;
  case (age2 >= 20):
  console.log("You're an adult");
  break;