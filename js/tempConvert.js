function tempConvertor() {
    const freezeF = 32
    const boilF = 212
    let tempF = (Math.floor(Math.random() * (boilF - freezeF + 1)) + freezeF)
  
    let tempC = ((5 / 9) * (tempF - 32)) + "C°"
  
    let tempK = (((5 / 9) * (tempF - 32)) + 273.15) + "K°"
  
    let convertTo = tempK
  
  
    console.log(tempF + "F° is " + convertTo)
  }
  
  tempConvertor()