var pluralizer = function(num,noun){
  if(num==1){
    return num+" "+noun;
  } else{
    return num+" "+noun+"s";
  }
};
