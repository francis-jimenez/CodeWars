function duplicateEncode(word){
    //creating object of instances of character
      let charCount = word.toLowerCase().split('').reduce((obj, letter) => {
        obj[letter] ? obj[letter] ++ : obj[letter] = 1;
        return obj
      }, {})
    //returning new string based on the number of characters in string
      return word.toLowerCase().split('').map(letter => {
       return charCount[letter] === 1 ? '(' : ')'
    }).join('')
  }
  