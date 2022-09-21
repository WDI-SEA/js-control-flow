let age=19;
switch(true){

    case (age<=1):
    console.log("infant");
    break;

     case (age>1 && age<=5):
    console.log("toddler");
    break;

     case (age>5 && age<=7):
    console.log("child");
    break;

     case (age>7 && age<=12):
    console.log("pre teen");
    break;

     case (age>12 && age<=18):
    console.log("teen");
    break;

     case (age>18 && age<=20):
    console.log("young adult");
    break;
  default:
    console.log("invalid input,input must be between 0 & 20");
}

// hello