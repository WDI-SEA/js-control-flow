let fahValue= "32";
let convert_unit = "C";
let end_Result = 0;
if(typeof(fahValue)==Number){
switch(convert_unit){
    case "K":
    case "k":
        end_Result= (fahValue - 32) * 5/9 + 273.15
        console.log("degrees Fahrenheit is Y degrees Celsius/Kelvin"+" "+end_Result)
        break;
    case "C":
     case "c":
            end_Result =  (fahValue - 32) * 5/9 
             console.log("degrees Fahrenheit is Y degrees Celsius/Kelvin"+" "+ end_Result)
              break;

}

}else{
    console.log('Please enter a numeric value')
}
