
var num = 70;
var unit = "F";

var calcTempInput = function(num, unit){
  if(num===""){
    return "Invalid Input";
  } else{
    if(unit=="F"){
      return (num+" degrees F is equal to "+((num-32)/(9/5)).toFixed(1)+" degrees C");
    } else{
      return ((num)*(9/5)+32).toFixed(1)+" &deg;F";
    }
  }
};
