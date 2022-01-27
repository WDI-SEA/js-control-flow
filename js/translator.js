//  Practice with functions

function translator(language) {
  if (language === 'eng') {
    console.log('Hello world')
  } else if (language === 'kor') {
    console.log('헬로 월드') 
  } else if (language ==='fr') {
    console.log('Bonjour le monde')
  
  }

// console.log(language);

}

//  strings are case sensitive
translator('eng')
translator('kor')
translator('fr')
