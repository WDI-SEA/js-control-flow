//variable uses ISO 639-1 codes
const lang = 'ru';

switch (lang) {
  case 'en':
    console.log('Hello world!')
    break
  case 'de':
    console.log('Hallo Welt!')
    break
  case 'fr':
    console.log('Bonjour monde!')
    break
  case 'cs':
    console.log('Ahoj světe!')
    break
  case 'ru':
    console.log('Привет мир!')
    break
  default:
    console.log('Sorry, I can only speak English, German, French, Czech, and Russian!')
}