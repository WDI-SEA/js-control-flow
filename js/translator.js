const translations = {
    dsn: 'Hej Verden',
    sph: 'Hola Mundo',
    hwn: 'Aloha Honua',
  }
  
  console.log(translations.dsn)
  
  let languageCode = translations.lol
  
  if ( languageCode === translations.dsn){
    console.log(`${translations.dsn}`)
  } else if ( languageCode === translations.sph){
    console.log(`${translations.sph}`)
  } else if (languageCode === translations.hwn){
    console.log(`${translations.hwn}`)
  }else{console.log(`Language not supported`)}