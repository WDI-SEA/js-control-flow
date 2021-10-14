const ageCat = ["infant", "toddler", "child", "preteen", "teen", "young adult"];
const ages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let personAge = "7";
switch(true) {
  case (0<=personAge && personAge<=2):    
  console.log("You are an infant!");
    break;
  case (3<=personAge && personAge<=5):    
  console.log("You are a toddler!");
    break;
  case (6<=personAge && personAge<=10):    
  console.log("You are a child!");
    break;
  case (11<=personAge && personAge<=12):    
  console.log("You are a preteen!");
    break;
  case (13<=personAge && personAge<=18):    
  console.log("You are a teen!");
    break;
  case (19<=personAge && personAge<=20):    
  console.log("You are a young adult!");
    break;
}