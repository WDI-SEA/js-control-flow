
var yourFriends = [
    'Bilbo',
    'Boromir',
    'Elrond',
    'Faramir',
    'Frodo',
    'Gandalf',
    'Legolas',
    'Pippin'
  ];
  const Friends=myFriends.concat(yourFriends);
  console.log(Friends);
  
  
  var foods = [
    'Popcorn',
    'Potato chips',
    'Shrimp',
    'Chicken rice',
    'Poutine',
    'Tacos',
    'Toast',
    'French Toast',
    'Crab',
    'Pho',
    'Lasagna',
    'Brownie',
    'Lobster',
    'Donuts',
    'Ice cream',
    'Hamburger',
    'Sushi',
    'Chocolate',
    'Pizza'
  ];
  
  console.log("Pho is my "+(foods.indexOf("Pho")+1)+" favourite food.");
  const f=foods.indexOf("Donuts");
  console.log(foods.splice(f,1));
  console.log(foods);
  
  var str = "Space";
  const index=2;
  const rep='i';
  const re=str.substring(0,index)
    +
    rep
    +
    str.substring(index+1);
  console.log(re);
  
  var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
  
  var l=((ages.length)/2)-1;
  console.log(ages[parseInt(l)]);