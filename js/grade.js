for (var i = 0; i <= 00; i++) {
    
    switch (true) {
      case (i >= 90):
        console.log("Score " + i + ' is Grade A');
        break;
      case (i >=80 && i < 90):
        console.log("Score " + i + ' is Grade B');
        break;
      case (i >= 70 && i < 80):
        console.log("Score " + i + ' is Grade C');
        break;
      case (i >= 60 && i < 70):
        console.log("Score " + i + ' is Grade D');
        break;
      case (i < 60):
        console.log("Score " + i + ' is Grade F');
        break;
      default:
        console.log('Who knows?');
    }
      
}