let age = "12";
switch(true){
case (18 <= age && age < 20):
  console.log('Welcome to adult life');
  break;
case (13 <= age && age<18):
  console.log('Enjoy your teens!');
  break;
case (11 <= age && age<13):
  console.log('Your a Preteen!');
  break;
case (8 <= age && age<11):
  console.log('Your a child!');
  break;
case (4 <= age && age<7):
  console.log('Enjoy your a tall tolder!');
  break;
case (0 <= age && age<=3):
  console.log('Such a cute infant !');
  break;
default:
  console.log('Your not born')
  break;
}