function pluralizer (word) {
    let numOfItems = word.charAt(0);
    let numberOfItems = parseInt(numOfItems);
    let newWord = '';
    if (numberOfItems > 1) {
        newWord = word + `'s`;
        console.log(newWord)
    } else {
        newWord = word;
        console.log(newWord);
    }
}

pluralizer('6dog');