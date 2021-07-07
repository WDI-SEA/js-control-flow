
var fr = "Bonjour le monde";
var de = "Hallo Welt";
var la = "Salve Orbis Terrarum";

var translateTo = la

if (translateTo === fr) {
    console.log("In French, the phrase 'Hello World.' is translated to " + "'" + translateTo + ".'")
}

else if (translateTo === de) {
    console.log("In German, the phrase 'Hello World.' is translated to " + "'" + translateTo + ".'")
}

else if (translateTo === la) {
    console.log("In Latin, the phrase 'Hello World.' is translated to " + "'" + translateTo + ".'")
}

else {
    console.log("That's not a language I know!");
}