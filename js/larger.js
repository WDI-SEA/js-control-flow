let grade = 78;

switch (true) {
    case (grade <= 90):
      console.log('Great Job');
      break;
    case 'B':
      console.log('Okay');
      break;
    case 'C':
    case 'D':
      console.log('Unacceptable');
      break;
    case 'F':
      console.log('Who are you?');
      break;
      default:
      console.log('not a grade');
  }