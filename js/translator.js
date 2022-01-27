
function translator(language) {
    if (language === 'kr') {
        console.log('안녕 세계 🇰🇷')
    } else if (language === 'fr'){
        console.log('Bonjour le monde 🇫🇷')
    } else if (language === 'jp') {
        console.log('こんにちは世界 🇯🇵')
    } else {
        console.log("Language not supported. Type 'kr' for korean, 'fr' for french, 'jp' for japanese.")
    }
}

translator("fr")
translator("kr")
translator("jp")
translator('catnese')
