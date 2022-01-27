let language = "Span"

const english = "Hello World!"
const korean = "안녕하세요 월드입니다!"
const french = "Bonjour le monde!"
const spanish = "Hola Mundo!"



if (language === "English" || language === "ENG" || language == "Eng"){
  console.log(english)
} else if (language === "Korean" || language === "KR" || language === "Kr") {
  console.log(korean)
} else if (language === "French" || language === "FR" || language === "Fr") {
  console.log(french)
} else if (language === "Spanish" || language === "Spa" || language === "Span") {
  console.log(spanish)
} else {
  console.log("Please choose the following languages: English, Korean, French or Spanish")
}