// To take in one var that says 'en' or other language and will return Hello World in the given language
//Possible entries: 'ge' 'vi' 'sp'

var convertTo = "sp";

var converter = function() {
    if (convertTo === "ge") {
        console.log("Hallo Welt!");
    } else if (convertTo === "vi") {
        console.log("Chào thế giới");
    } else if (convertTo === "sp") {
        console.log("Hola Mundo");
    } else {
        console.log("Hello World!");
    }
}
converter();
