// To take in one var that says 'en' or other language and will return Hello World in the given language
//Possible entries: 'ge' 'vi' 'sp'

var convertTo = "vi";

var converter = function() {
    if (convertTo === "ge") {
        return "Hallo Welt!";
    } else if (convertTo === "vi") {
        return "Chào thế giới";
    } else if (convertTo === "sp") {
        return "Hola Mundo";
    } else {
        return "Hello World!"
    }
}

//Done