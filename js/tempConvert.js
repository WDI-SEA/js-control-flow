// To convert temparatures, one var for the temp in F, and the other will say K or C making it convert to one
//of those respectively
// F to C = (x - 32) * 5/9
// F to K = || + 273.15

var convertTo = "k";
var tempInF = 82;

var converter = function() {
    if (convertTo == "k") {
        var tempInK = (tempInF - 32) * (5/9) + 273.15;
        return tempInK;
    } else if (convertTo == "c") {
        var tempInC = (tempInF - 32) * (5/9);
        return tempInC;
    }
}

//Done