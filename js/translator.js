let languageCode = null;

function translator(languageCode) {
  if (languageCode === 'fr') {
    console.log("Bonjour Tout Monde")
  } else if (languageCode === 'vn') {
    console.log("Chào thế giới")
  } else if (languageCode === 'rw') {
    console.log("Mwaramutse Isi")
  } else {
    console.log("Please choose either 'fr', 'vn', or 'rw'")
  }
}

translator('rw')